import random
import uuid
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text

engine = create_engine("postgresql+psycopg2://postgres:4002@localhost/task_ai")

CATEGORIES = ["Work", "Study", "Health", "Personal", "Coding"]
PRIORITIES  = ["High", "Medium", "Low"]

# Fake users with varied productivity profiles for clustering
FAKE_USERS = [
    {"first_name": "Alice",  "last_name": "Sharma",  "email": "alice.sharma@demo.com",  "profile": "high"},
    {"first_name": "Bob",    "last_name": "Verma",   "email": "bob.verma@demo.com",     "profile": "medium"},
    {"first_name": "Carol",  "last_name": "Nair",    "email": "carol.nair@demo.com",    "profile": "low"},
    {"first_name": "David",  "last_name": "Patel",   "email": "david.patel@demo.com",   "profile": "high"},
    {"first_name": "Eva",    "last_name": "Mehta",   "email": "eva.mehta@demo.com",     "profile": "medium"},
]

PROFILE_PARAMS = {
    "high":   {"completion": 0.90, "focus": (4, 5), "distraction": (0, 1), "tasks": 80},
    "medium": {"completion": 0.65, "focus": (3, 4), "distraction": (1, 3), "tasks": 60},
    "low":    {"completion": 0.40, "focus": (1, 3), "distraction": (3, 6), "tasks": 50},
}


def _insert_tasks_for_user(conn, user_id: str, n: int, profile: str):
    p = PROFILE_PARAMS[profile]
    for i in range(n):
        task_id   = str(uuid.uuid4())
        days_ago  = random.randint(0, 6)
        hours_ago = random.randint(1, 23)
        created_at = datetime.now() - timedelta(days=days_ago, hours=hours_ago)

        status = "Completed" if random.random() < p["completion"] else random.choice(["Pending", "In Progress"])

        est_time = random.randint(20, 90)
        act_time = est_time + random.randint(-10, 20) if status == "Completed" else None
        comp_at  = created_at + timedelta(minutes=act_time) if status == "Completed" else None
        due_date = created_at + timedelta(hours=random.randint(2, 48))

        conn.execute(text("""
            INSERT INTO tasks (id, user_id, title, category, priority, status,
                               estimated_time, actual_time, due_date, created_at, completed_at)
            VALUES (:id, :uid, :title, :cat, :prio, :stat,
                    :est, :act, :due, :ca, :coa)
        """), {
            "id": task_id, "uid": user_id,
            "title": f"Task {i+1} [{profile}]",
            "cat":  random.choice(CATEGORIES),
            "prio": random.choice(PRIORITIES),
            "stat": status,
            "est":  est_time, "act": act_time,
            "due":  due_date, "ca": created_at, "coa": comp_at,
        })

        if status in ["Completed", "In Progress"]:
            duration   = act_time if act_time else random.randint(15, 45)
            focus      = random.randint(*p["focus"])
            distract   = random.randint(*p["distraction"])
            end_time   = created_at + timedelta(minutes=duration) if status == "Completed" else None
            conn.execute(text("""
                INSERT INTO task_logs (id, task_id, user_id, start_time, end_time,
                                       duration, focus_score, distraction_count)
                VALUES (:lid, :tid, :uid, :st, :et, :dur, :fs, :dc)
            """), {
                "lid": str(uuid.uuid4()), "tid": task_id, "uid": user_id,
                "st":  created_at, "et": end_time,
                "dur": duration, "fs": focus, "dc": distract,
            })


def seed_this_week():
    with engine.connect() as conn:
        # ── 1. Clear old seeded data ──────────────────────────────────────────
        print("🗑️  Clearing old seeded data...")
        for u in FAKE_USERS:
            row = conn.execute(text("SELECT id FROM users WHERE email = :e"), {"e": u["email"]}).fetchone()
            if row:
                conn.execute(text("DELETE FROM users WHERE id = :id"), {"id": row[0]})

        # Also clear tasks older than 7 days for the primary user to keep it clean
        primary = conn.execute(text("SELECT id FROM users LIMIT 1")).fetchone()
        if not primary:
            print("❌ No primary user found. Sign up first.")
            return
        PRIMARY_ID = primary[0]

        conn.execute(text("""
            DELETE FROM tasks
            WHERE user_id = :uid AND created_at < NOW() - INTERVAL '7 days'
        """), {"uid": PRIMARY_ID})

        # ── 2. Seed primary user (100 tasks, high-performer profile) ──────────
        print(f"🚀 Seeding 100 tasks for primary user {PRIMARY_ID}...")
        _insert_tasks_for_user(conn, str(PRIMARY_ID), 100, "high")

        # ── 3. Seed fake users for clustering diversity ───────────────────────
        print("👥 Seeding fake users for model training...")
        for u in FAKE_USERS:
            uid = str(uuid.uuid4())
            conn.execute(text("""
                INSERT INTO users (id, first_name, last_name, email, mobile_number, password)
                VALUES (:id, :fn, :ln, :em, :mob, :pw)
            """), {
                "id": uid, "fn": u["first_name"], "ln": u["last_name"],
                "em": u["email"], "mob": "9999999999", "pw": "demo1234",
            })
            n = PROFILE_PARAMS[u["profile"]]["tasks"]
            _insert_tasks_for_user(conn, uid, n, u["profile"])
            print(f"   ✅ {u['first_name']} ({u['profile']}) — {n} tasks")

        conn.commit()
        print(f"\n✅ Done! Primary user: {PRIMARY_ID}")
        print("👉 Now retrain models: train_model.py, train_success_model.py, train_cluster_model.py")


if __name__ == "__main__":
    seed_this_week()

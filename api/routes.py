from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from models import Task, CreateTaskSchema, CompleteTaskSchema, User, LoginRequest
from database import get_connection, release_connection
from datetime import datetime, timezone, date
import logging, re, json as _json
import google.genai as _genai

_gemini_client = _genai.Client(api_key="AIzaSyAvDyNHloQjtNnXpoWjl01RYNCJ7HGezIA")

logging.basicConfig(level=logging.INFO)
_log = logging.getLogger("insights")

router = APIRouter()


@router.get("/tasks")
def get_tasks(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            "SELECT id, title, category, priority, status, estimated_time, due_date, created_at FROM tasks WHERE user_id = %s ORDER BY created_at DESC",
            (user_id,)
        )
        rows = cur.fetchall()
        return [
            {
                "id": str(r[0]), "title": r[1], "category": r[2],
                "priority": r[3], "status": r[4], "estimated_time": r[5],
                "due_date": str(r[6]), "created_at": str(r[7])
            }
            for r in rows
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.post("/tasks/start/{task_id}")
def start_task(task_id: str, body: dict):
    user_id = body.get("user_id")
    if not user_id:
        raise HTTPException(status_code=400, detail="user_id is required")

    conn = get_connection()
    cur = conn.cursor()
    try:
        # Check task exists
        cur.execute("SELECT id, status FROM tasks WHERE id = %s", (task_id,))
        task = cur.fetchone()
        if not task:
            raise HTTPException(status_code=404, detail="Task not found")
        if task[1] == "Completed":
            raise HTTPException(status_code=400, detail="Task is already completed")

        # Prevent duplicate active log
        cur.execute(
            "SELECT id FROM task_logs WHERE task_id = %s AND end_time IS NULL",
            (task_id,)
        )
        if cur.fetchone():
            raise HTTPException(status_code=400, detail="Task is already in progress")

        now = datetime.now(timezone.utc)

        # Create log entry
        cur.execute(
            "INSERT INTO task_logs (task_id, user_id, start_time) VALUES (%s, %s, %s)",
            (task_id, user_id, now)
        )

        # Update task status
        cur.execute(
            "UPDATE tasks SET status = 'In Progress' WHERE id = %s",
            (task_id,)
        )
        conn.commit()
    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)

    return {"message": "Task started successfully"}


@router.post("/tasks/complete/{task_id}")
def complete_task(task_id: str, data: CompleteTaskSchema):
    if not (1 <= data.focus_score <= 5):
        raise HTTPException(status_code=400, detail="focus_score must be between 1 and 5")

    conn = get_connection()
    cur = conn.cursor()
    try:
        # Check task exists and is in progress
        cur.execute("SELECT id, status, created_at FROM tasks WHERE id = %s", (task_id,))
        task = cur.fetchone()
        if not task:
            raise HTTPException(status_code=404, detail="Task not found")
        if task[1] not in ("In Progress", "Pending"):
            raise HTTPException(status_code=400, detail="Task has not been started")

        now = datetime.now(timezone.utc)
        created_at = task[2]
        if created_at.tzinfo is None:
            from datetime import timezone as tz
            created_at = created_at.replace(tzinfo=tz.utc)
        actual_minutes = max(1, int((now - created_at).total_seconds() / 60))

        # Update task
        cur.execute(
            """
            UPDATE tasks
            SET status = 'Completed', completed_at = %s, actual_time = %s
            WHERE id = %s
            """,
            (now, actual_minutes, task_id)
        )

        # Update latest open log
        cur.execute(
            """
            SELECT id, start_time FROM task_logs
            WHERE task_id = %s AND end_time IS NULL
            ORDER BY start_time DESC LIMIT 1
            """,
            (task_id,)
        )
        log = cur.fetchone()
        if log:
            log_id, start_time = log
            if start_time.tzinfo is None:
                start_time = start_time.replace(tzinfo=timezone.utc)
            duration = max(1, int((now - start_time).total_seconds() / 60))
            cur.execute(
                """
                UPDATE task_logs
                SET end_time = %s, duration = %s,
                    focus_score = %s, distraction_count = %s
                WHERE id = %s
                """,
                (now, duration, data.focus_score, data.distraction_count, log_id)
            )

        conn.commit()
    except HTTPException:
        conn.rollback()
        raise
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)

    return {"message": "Task completed successfully"}


@router.post("/tasks")
def create_task(task: CreateTaskSchema):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            INSERT INTO tasks (user_id, title, category, priority, status, estimated_time, due_date)
            VALUES (%s, %s, %s, %s, 'Pending', %s, %s)
            RETURNING id
            """,
            (str(task.user_id), task.title, task.category, task.priority,
             task.estimated_time, task.due_date)
        )
        task_id = cur.fetchone()[0]
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)

    return {"message": "Task created successfully", "task_id": str(task_id)}


@router.post("/signup")
def signup(user: User):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id FROM users WHERE email = %s", (user.email,))
    if cur.fetchone():
        cur.close()
        release_connection(conn)
        raise HTTPException(status_code=400, detail="Email already registered")
    cur.execute(
        "INSERT INTO users (first_name, last_name, email, mobile_number, password) VALUES (%s, %s, %s, %s, %s)",
        (user.first_name, user.last_name, user.email, user.mobile_number, user.password)
    )
    conn.commit()
    cur.close()
    release_connection(conn)
    return {"message": "User registered successfully"}


@router.post("/login")
def login(data: LoginRequest):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "SELECT id, first_name, last_name, email FROM users WHERE email = %s AND password = %s",
        (data.email, data.password)
    )
    user = cur.fetchone()
    cur.close()
    release_connection(conn)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {
        "message": "Login successful",
        "user": {"id": str(user[0]), "first_name": user[1], "last_name": user[2], "email": user[3]}
    }


@router.get("/profile")
def get_profile(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            "SELECT id, first_name, last_name, email, mobile_number, created_at FROM users WHERE id = %s",
            (user_id,)
        )
        u = cur.fetchone()
        if not u:
            raise HTTPException(status_code=404, detail="User not found")
        return {
            "id":            str(u[0]),
            "first_name":    u[1],
            "last_name":     u[2],
            "email":         u[3],
            "mobile_number": u[4],
            "created_at":    str(u[5])
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


# ── DASHBOARD ROUTES ──────────────────────────────────────────────────────────

@router.get("/dashboard/summary")
def dashboard_summary(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        today = date.today()
        cur.execute("""
            SELECT
                (SELECT COUNT(*) FROM tasks WHERE user_id = %s AND status = 'Completed' AND DATE(completed_at) = %s),
                (SELECT COUNT(*) FROM tasks WHERE user_id = %s AND status != 'Completed'),
                (SELECT COALESCE(SUM(duration), 0) FROM task_logs WHERE user_id = %s AND DATE(start_time) = %s),
                (SELECT COUNT(*) FROM tasks WHERE user_id = %s),
                (SELECT COALESCE(AVG(focus_score), 0) FROM task_logs WHERE user_id = %s)
        """, (user_id, today, user_id, user_id, today, user_id, user_id))
        completed, pending, time_spent, total, avg_focus = cur.fetchone()
        avg_focus = float(avg_focus)
        score = min(int((completed / total) * avg_focus * 20), 100) if total > 0 else 0
        return {
            "tasksCompleted": completed,
            "tasksPending": pending,
            "timeSpent": int(time_spent),
            "productivityScore": score
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.get("/dashboard/task-trend")
def task_trend(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            SELECT DATE(created_at) AS day, COUNT(*) AS cnt
            FROM tasks
            WHERE user_id = %s
            GROUP BY day
            ORDER BY day DESC
            LIMIT 30
            """,
            (user_id,)
        )
        rows = cur.fetchall()
        return [{"date": str(r[0]), "count": r[1]} for r in reversed(rows)]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.get("/dashboard/category-distribution")
def category_distribution(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            SELECT category, COUNT(*) AS cnt
            FROM tasks
            WHERE user_id = %s
            GROUP BY category
            ORDER BY cnt DESC
            """,
            (user_id,)
        )
        rows = cur.fetchall()
        return [{"category": r[0], "count": r[1]} for r in rows]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.get("/dashboard/heatmap")
def heatmap(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            SELECT DATE(completed_at) AS day, COUNT(*) AS cnt
            FROM tasks
            WHERE user_id = %s AND status = 'Completed' AND completed_at IS NOT NULL
            GROUP BY day
            ORDER BY day
            """,
            (user_id,)
        )
        rows = cur.fetchall()
        return [{"date": str(r[0]), "count": r[1]} for r in rows]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


GEMINI_API_KEY = "AIzaSyAvDyNHloQjtNnXpoWjl01RYNCJ7HGezIA"  
GEMINI_MODEL   = "gemini-2.0-flash"

# ── In-memory cache: { user_id: { "data": dict, "ts": datetime } } ──
_insights_cache: dict = {}
CACHE_TTL_SECONDS = 600  # 10 minutes


@router.delete("/dashboard/insights/cache")
def clear_insights_cache(user_id: str = Query(...)):
    """Force-bust the insights cache for a user so next GET calls Gemini fresh."""
    _insights_cache.pop(user_id, None)
    return {"cleared": True}


def _parse_gemini_json(text: str) -> dict | None:
    """Strip markdown fences and parse JSON safely."""
    text = text.strip()
    text = re.sub(r"^```[a-z]*\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    try:
        return _json.loads(text.strip())
    except Exception:
        return None


# tracks which users have a Gemini fetch in-flight
_insights_pending: set = set()


def _call_gemini(prompt: str, max_retries: int = 2) -> dict | None:
    """Call Gemini with retry (no sleep between retries to keep it fast)."""
    for attempt in range(1, max_retries + 1):
        try:
            _log.info("Gemini attempt %d/%d", attempt, max_retries)
            response = _gemini_client.models.generate_content(
                model=GEMINI_MODEL,
                contents=prompt,
            )
            raw = response.text
            parsed = _parse_gemini_json(raw)
            if parsed and "insights" in parsed and "recommendations" in parsed:
                return parsed
        except Exception as e:
            _log.error("Gemini attempt %d error: %s", attempt, str(e))
    return None


def _fetch_and_cache_gemini(user_id: str, prompt: str, fallback: dict) -> None:
    """Run in background thread: call Gemini and update cache."""
    try:
        parsed = _call_gemini(prompt)
        if parsed:
            result = {
                "insights":        (parsed.get("insights") or [])[:4],
                "recommendations": (parsed.get("recommendations") or [])[:3],
            }
            _insights_cache[user_id] = {"data": result, "ts": datetime.now(timezone.utc)}
            _log.info("Gemini cache updated for user %s", user_id)
    except Exception as e:
        _log.error("Background Gemini fetch failed: %s", e)
    finally:
        _insights_pending.discard(user_id)


@router.get("/dashboard/insights")
def insights(user_id: str = Query(...)):
    import joblib, os, numpy as np, threading

    conn = get_connection()
    cur  = conn.cursor()
    try:
        # ── 1. Core behavioral stats ──────────────────────────────────────────
        cur.execute("""
            SELECT
                COUNT(t.id),
                SUM(CASE WHEN t.status='Completed' THEN 1 ELSE 0 END),
                COALESCE(AVG(tl.focus_score),       0),
                COALESCE(AVG(tl.distraction_count), 0),
                COALESCE(AVG(tl.duration),          0),
                COALESCE(AVG(t.estimated_time),     0),
                COALESCE(AVG(t.actual_time),        0)
            FROM tasks t
            LEFT JOIN task_logs tl ON t.id = tl.task_id
            WHERE t.user_id = %s
        """, (user_id,))
        row = cur.fetchone()
        total_tasks, completed, avg_focus, avg_distraction, avg_duration, avg_estimated, avg_actual = (
            int(row[0] or 0), int(row[1] or 0),
            float(row[2]), float(row[3]), float(row[4]),
            float(row[5]), float(row[6])
        )

        if total_tasks == 0:
            return {"insights": ["No data yet — create and complete tasks to generate AI insights."], "recommendations": []}

        completion_rate = round(completed / total_tasks * 100, 1)

        # ── 2. Peak productivity hour ─────────────────────────────────────────
        cur.execute("""
            SELECT EXTRACT(HOUR FROM start_time) AS hr, COUNT(*) AS cnt
            FROM task_logs WHERE user_id = %s
            GROUP BY hr ORDER BY cnt DESC LIMIT 1
        """, (user_id,))
        peak = cur.fetchone()
        peak_hour_str = None
        if peak:
            hr = int(peak[0])
            peak_hour_str = f"{hr % 12 or 12} {'AM' if hr < 12 else 'PM'}"

        # ── 3. Most delayed category ──────────────────────────────────────────
        cur.execute("""
            SELECT t.category, AVG(t.actual_time - t.estimated_time) AS avg_delay
            FROM tasks t
            WHERE t.user_id = %s AND t.actual_time IS NOT NULL AND t.estimated_time IS NOT NULL
            GROUP BY t.category ORDER BY avg_delay DESC LIMIT 1
        """, (user_id,))
        delayed_cat = cur.fetchone()

        # ── 4. Best focus category ────────────────────────────────────────────
        cur.execute("""
            SELECT t.category, AVG(tl.focus_score) AS fs
            FROM tasks t JOIN task_logs tl ON t.id = tl.task_id
            WHERE t.user_id = %s
            GROUP BY t.category ORDER BY fs DESC LIMIT 1
        """, (user_id,))
        best_focus_cat = cur.fetchone()

        # ── 5. Consecutive active day streak ──────────────────────────────────
        cur.execute("""
            SELECT DISTINCT DATE(completed_at) FROM tasks
            WHERE user_id = %s AND status = 'Completed' AND completed_at IS NOT NULL
            ORDER BY 1 DESC
        """, (user_id,))
        active_days = [r[0] for r in cur.fetchall()]
        streak = 0
        if active_days:
            from datetime import timedelta
            check = date.today()
            for d in active_days:
                if d == check or d == check - timedelta(days=1):
                    streak += 1
                    check = d - timedelta(days=1)
                else:
                    break

        # ── 6. High-priority pending count ────────────────────────────────────
        cur.execute("""
            SELECT COUNT(*) FROM tasks
            WHERE user_id = %s AND priority = 'High' AND status != 'Completed'
        """, (user_id,))
        high_priority_pending = int(cur.fetchone()[0])

        # ── 7. Recent focus trend (last 3 days vs previous 3 days) ────────────
        cur.execute("""
            SELECT
                AVG(CASE WHEN DATE(start_time) >= CURRENT_DATE - INTERVAL '3 days'
                         THEN focus_score END),
                AVG(CASE WHEN DATE(start_time) < CURRENT_DATE - INTERVAL '3 days'
                         AND DATE(start_time) >= CURRENT_DATE - INTERVAL '6 days'
                         THEN focus_score END)
            FROM task_logs WHERE user_id = %s
        """, (user_id,))
        trend_row = cur.fetchone()
        recent_focus = float(trend_row[0]) if trend_row[0] else None
        prev_focus   = float(trend_row[1]) if trend_row[1] else None
        focus_trend_delta = round(recent_focus - prev_focus, 2) if (recent_focus and prev_focus) else None

        # ── 8. Best day of week ───────────────────────────────────────────────
        cur.execute("""
            SELECT TO_CHAR(completed_at, 'Day') AS dow, COUNT(*) AS cnt
            FROM tasks
            WHERE user_id = %s AND status = 'Completed' AND completed_at IS NOT NULL
            GROUP BY dow ORDER BY cnt DESC LIMIT 1
        """, (user_id,))
        best_day_row = cur.fetchone()
        best_day = best_day_row[0].strip() if best_day_row else None

        # ── 9. ML model predictions ───────────────────────────────────────────
        base = os.path.dirname(__file__)
        def _load(path):
            return joblib.load(path) if os.path.exists(path) else None

        cluster_model  = _load(os.path.join(base, "clustering_model.pkl"))
        cluster_scaler = _load(os.path.join(base, "cluster_scaler.pkl"))
        cluster_labels = _load(os.path.join(base, "cluster_labels.pkl"))
        success_model  = _load(os.path.join(base, "success_model.pkl"))

        cluster_label    = None
        focus_gap_to_top = None
        if cluster_model and cluster_scaler and cluster_labels:
            X_c          = np.array([[avg_duration, avg_focus, avg_distraction, total_tasks]])
            cluster_id   = int(cluster_model.predict(cluster_scaler.transform(X_c))[0])
            cluster_label = cluster_labels.get(cluster_id, "Unknown")
            all_centers  = cluster_scaler.inverse_transform(cluster_model.cluster_centers_)
            for cid, lbl in cluster_labels.items():
                if lbl == "Highly Focused":
                    focus_gap_to_top = round(max(0.1, float(all_centers[cid][1]) - avg_focus), 2)
                    break

        success_probability = None
        if success_model:
            try:
                proba = success_model.predict_proba([[total_tasks, avg_focus, avg_distraction]])[0]
                success_probability = round(float(proba[1]) * 100, 1) if len(proba) > 1 else round(float(proba[0]) * 100, 1)
            except Exception:
                success_probability = None

        # ── 10. Build data payload for LLM ────────────────────────────────────
        time_ratio = round(avg_actual / avg_estimated, 2) if avg_estimated > 0 and avg_actual > 0 else None

        user_data = {
            "total_tasks": total_tasks,
            "completed_tasks": completed,
            "completion_rate_pct": completion_rate,
            "avg_focus_score_out_of_5": round(avg_focus, 2),
            "avg_distraction_count_per_session": round(avg_distraction, 2),
            "avg_session_duration_minutes": round(avg_duration, 1),
            "avg_estimated_time_minutes": round(avg_estimated, 1),
            "avg_actual_time_minutes": round(avg_actual, 1),
            "time_estimation_ratio": time_ratio,
            "peak_productivity_hour": peak_hour_str,
            "best_day_of_week": best_day,
            "active_day_streak": streak,
            "high_priority_tasks_pending": high_priority_pending,
            "focus_trend_delta_last_3_days": focus_trend_delta,
            "ml_cluster_label": cluster_label,
            "ml_focus_gap_to_highly_focused_tier": focus_gap_to_top,
            "ml_daily_success_probability_pct": success_probability,
            "most_delayed_category": delayed_cat[0] if delayed_cat and delayed_cat[1] is not None and float(delayed_cat[1]) > 5 else None,
            "most_delayed_category_overrun_minutes": round(float(delayed_cat[1]), 1) if delayed_cat and delayed_cat[1] is not None and float(delayed_cat[1]) > 5 else None,
            "highest_focus_category": best_focus_cat[0] if best_focus_cat else None,
            "highest_focus_category_avg_score": round(float(best_focus_cat[1]), 2) if best_focus_cat and best_focus_cat[1] is not None else None,
        }

        # ── 11. Build data-driven fallback ────────────────────────────────────
        recs = []
        if avg_distraction > 3:
            recs.append(f"Your distraction count averages {avg_distraction:.1f} per session — try eliminating phone notifications during work blocks to bring this below 2.")
        if avg_focus < 3:
            recs.append(f"Your focus score of {avg_focus:.1f}/5 is below average — schedule your most demanding tasks during your peak hour ({peak_hour_str or 'morning'}) when concentration is highest.")
        if time_ratio and time_ratio > 1.3:
            recs.append(f"You're taking {round((time_ratio - 1) * 100)}% longer than estimated on average — break large tasks into 30-minute sub-tasks to improve time accuracy.")
        if high_priority_pending > 0:
            recs.append(f"You have {high_priority_pending} high-priority task(s) still pending — tackle at least one first thing tomorrow before checking messages.")
        if focus_trend_delta is not None and focus_trend_delta < -0.3:
            recs.append(f"Your focus dropped by {abs(focus_trend_delta):.1f} points over the last 3 days — consider a short break day or lighter workload to recover.")
        if cluster_label and cluster_label != "Highly Focused" and focus_gap_to_top:
            recs.append(f"You're in the '{cluster_label}' cluster, {focus_gap_to_top} focus points away from the Highly Focused tier — one extra focused session per day could close that gap.")
        generic_pool = [
            f"You completed {completion_rate}% of your tasks — push for 80%+ by reviewing pending items each evening.",
            f"Your best day is {best_day or 'not yet determined'} — front-load your hardest tasks on that day.",
            f"Your {streak}-day streak shows consistency — protect it by completing at least one task daily.",
        ]
        for g in generic_pool:
            if len(recs) >= 3:
                break
            recs.append(g)

        fallback = {
            "insights": [
                f"You completed {completed} of {total_tasks} tasks — a {completion_rate}% completion rate.",
                f"Your average focus score is {avg_focus:.1f}/5 with {avg_distraction:.1f} distractions per session.",
                f"ML cluster: {cluster_label or 'N/A'}. Predicted daily success probability: {success_probability or 'N/A'}%.",
                f"You have a {streak}-day active streak with {high_priority_pending} high-priority task(s) still pending.",
            ],
            "recommendations": recs[:3],
        }

        # ── 12. Return cached Gemini result if fresh, else fallback + trigger background fetch ──
        cached = _insights_cache.get(user_id)
        if cached and (datetime.now(timezone.utc) - cached["ts"]).total_seconds() < CACHE_TTL_SECONDS:
            return cached["data"]

        # Trigger background Gemini fetch (non-blocking)
        if user_id not in _insights_pending:
            _insights_pending.add(user_id)
            prompt = (
                "You are a personal productivity coach AI. Analyze the following real user performance data "
                "and generate deeply personalized insights and recommendations.\n\n"
                "User Performance Data:\n"
                + _json.dumps(user_data, indent=2)
                + "\n\nReturn ONLY valid JSON. Do not include markdown, backticks, or explanations."
                "\nUse this exact format:"
                '\n{"insights": ["...", "...", "...", "..."], "recommendations": ["...", "...", "..."]}'
                "\n\nRules:"
                "\n- Exactly 4 insights (1-2 sentences each). Reference THIS user's specific numbers directly."
                "\n- Exactly 3 recommendations (1-2 sentences each). Target the weakest areas in the data."
                "\n- No bullet points, numbering, or markdown. Plain sentences only."
                f"\n- Key stats: {completion_rate}% completion, {avg_focus:.1f}/5 focus, "
                f"{avg_distraction:.1f} distractions/session, {streak}-day streak, "
                f"cluster={cluster_label or 'N/A'}, success={success_probability or 'N/A'}%."
            )
            threading.Thread(
                target=_fetch_and_cache_gemini,
                args=(user_id, prompt, fallback),
                daemon=True
            ).start()

        # Return stale cache if available, otherwise data-driven fallback
        return _insights_cache[user_id]["data"] if user_id in _insights_cache else fallback

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.get("/dashboard/weekly-tasks")
def weekly_tasks(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            SELECT DATE(completed_at) AS day, COUNT(*) AS cnt
            FROM tasks
            WHERE user_id = %s
              AND status = 'Completed'
              AND completed_at >= CURRENT_DATE - INTERVAL '7 days'
            GROUP BY day
            ORDER BY day
            """,
            (user_id,)
        )
        rows = cur.fetchall()
        day_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        return [{"date": day_names[r[0].weekday()], "count": r[1]} for r in rows]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)


@router.get("/dashboard/focus-trend")
def focus_trend(user_id: str = Query(...)):
    conn = get_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            SELECT DATE(start_time) AS day,
                   ROUND(AVG(focus_score)::numeric, 2)       AS avg_focus,
                   ROUND(AVG(distraction_count)::numeric, 2) AS avg_distraction
            FROM task_logs
            WHERE user_id = %s
              AND start_time >= CURRENT_DATE - INTERVAL '7 days'
            GROUP BY day
            ORDER BY day
            """,
            (user_id,)
        )
        rows = cur.fetchall()
        day_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        return [
            {
                "date": day_names[r[0].weekday()],
                "avg_focus": float(r[1]),
                "avg_distraction": float(r[2])
            }
            for r in rows
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        release_connection(conn)

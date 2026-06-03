import pandas as pd
import joblib
import os
from sqlalchemy import create_engine, text
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

DB_URL = "postgresql+psycopg2://postgres:4002@localhost/task_ai"
DIR    = os.path.dirname(__file__)

engine = create_engine(DB_URL)

QUERY = text("""
    SELECT
        t.user_id,
        AVG(tl.duration)          AS avg_duration,
        AVG(tl.focus_score)       AS avg_focus,
        AVG(tl.distraction_count) AS avg_distraction,
        COUNT(t.id)               AS total_tasks
    FROM tasks t
    JOIN task_logs tl ON t.id = tl.task_id
    GROUP BY t.user_id
""")

with engine.connect() as conn:
    df = pd.read_sql(QUERY, conn)

print(f"✅ Loaded {len(df)} user records")

if len(df) < 3:
    print("❌ Need at least 3 users to cluster. Run seed_data.py for more users.")
    exit()

FEATURES = ["avg_duration", "avg_focus", "avg_distraction", "total_tasks"]
df = df.dropna(subset=FEATURES)
X  = df[FEATURES]

scaler  = StandardScaler()
X_scaled = scaler.fit_transform(X)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
kmeans.fit(X_scaled)

# ── Label clusters by avg_focus of each center ──────────────────────────────
centers_df = pd.DataFrame(scaler.inverse_transform(kmeans.cluster_centers_), columns=FEATURES)
focus_rank  = centers_df["avg_focus"].rank()          # higher focus → better
distract_rank = centers_df["avg_distraction"].rank()  # lower distraction → better
score = focus_rank - distract_rank

sorted_idx = score.sort_values(ascending=False).index.tolist()
label_map  = {
    sorted_idx[0]: "Highly Focused",
    sorted_idx[1]: "Average Performer",
    sorted_idx[2]: "Distracted User",
}

df["cluster"] = kmeans.labels_
df["label"]   = df["cluster"].map(label_map)
print(df[["user_id", "cluster", "label"]].to_string(index=False))

joblib.dump(kmeans,   os.path.join(DIR, "clustering_model.pkl"))
joblib.dump(scaler,   os.path.join(DIR, "cluster_scaler.pkl"))
joblib.dump(label_map, os.path.join(DIR, "cluster_labels.pkl"))

print("\n✅ Saved: clustering_model.pkl, cluster_scaler.pkl, cluster_labels.pkl")
print("👉 Now start FastAPI: uvicorn main:app --reload")

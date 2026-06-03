import pandas as pd
from sqlalchemy import create_engine
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import joblib

# ── 1. Extract ────────────────────────────────────────────────────────────────
engine = create_engine("postgresql+psycopg2://postgres:4002@localhost/task_ai")

query = """
SELECT
    DATE(t.created_at)                                          AS day,
    COUNT(*)                                                    AS total_tasks,
    SUM(CASE WHEN t.status = 'Completed' THEN 1 ELSE 0 END)    AS completed_tasks,
    AVG(tl.focus_score)                                         AS avg_focus,
    AVG(tl.distraction_count)                                   AS avg_distraction
FROM tasks t
LEFT JOIN task_logs tl ON t.id = tl.task_id
GROUP BY DATE(t.created_at);
"""

df = pd.read_sql(query, engine)
print(f"Rows loaded: {len(df)}")

if len(df) < 5:
    print("Not enough data. Run seed_data.py first.")
    exit()

# ── 2. Target variable ────────────────────────────────────────────────────────
df["success"] = ((df["completed_tasks"] / df["total_tasks"]) > 0.7).astype(int)

# ── 3. Preprocess ─────────────────────────────────────────────────────────────
df.dropna(inplace=True)

FEATURES = ["total_tasks", "avg_focus", "avg_distraction"]
X = df[FEATURES]
y = df["success"]

# ── 4. Train ──────────────────────────────────────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# ── 5. Evaluate ───────────────────────────────────────────────────────────────
preds = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, preds) * 100:.1f}%")
if len(X_test) > 1:
    print(classification_report(y_test, preds, zero_division=0))

# ── 6. Save ───────────────────────────────────────────────────────────────────
joblib.dump(model, "success_model.pkl")
print("Model saved: success_model.pkl")

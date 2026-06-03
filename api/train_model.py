import pandas as pd
from sqlalchemy import create_engine
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
import joblib

# ── 1. Connect & Extract ──────────────────────────────────────────────────────
engine = create_engine("postgresql+psycopg2://postgres:4002@localhost/task_ai")

query = """
SELECT
    t.category,
    t.priority,
    tl.focus_score,
    tl.distraction_count,
    tl.duration AS actual_time
FROM tasks t
JOIN task_logs tl ON t.id = tl.task_id
WHERE tl.duration IS NOT NULL;
"""

df = pd.read_sql(query, engine)
print(f"Rows loaded: {len(df)}")

if df.empty:
    print("No data found. Train the model after completing some tasks.")
    exit()

# ── 2. Preprocess ─────────────────────────────────────────────────────────────
df.dropna(inplace=True)

df = pd.get_dummies(df, columns=["category", "priority"])

X = df.drop(columns=["actual_time"])
y = df["actual_time"]

# ── 3. Train ──────────────────────────────────────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

mae = mean_absolute_error(y_test, model.predict(X_test))
print(f"MAE: {mae:.2f} minutes")

# ── 4. Save ───────────────────────────────────────────────────────────────────
joblib.dump(model, "task_time_model.pkl")
joblib.dump(list(X.columns), "model_columns.pkl")
print("Model saved: task_time_model.pkl | model_columns.pkl")

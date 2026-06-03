from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import pandas as pd
import joblib
import numpy as np
import os

router = APIRouter()

# ── Task-time regression model ────────────────────────────────────────────────
MODEL_PATH = os.path.join(os.path.dirname(__file__), "task_time_model.pkl")
COLS_PATH  = os.path.join(os.path.dirname(__file__), "model_columns.pkl")

def _load():
    if not os.path.exists(MODEL_PATH) or not os.path.exists(COLS_PATH):
        return None, None
    return joblib.load(MODEL_PATH), joblib.load(COLS_PATH)

model, model_columns = _load()

# ── Success classification model ──────────────────────────────────────────────
SUCCESS_MODEL_PATH = os.path.join(os.path.dirname(__file__), "success_model.pkl")

def _load_success():
    if not os.path.exists(SUCCESS_MODEL_PATH):
        return None
    return joblib.load(SUCCESS_MODEL_PATH)

success_model = _load_success()


class PredictRequest(BaseModel):
    category: str
    priority: str
    focus_score: int = 3
    distraction_count: int = 1


@router.post("/predict-time")
def predict_time(data: PredictRequest):
    global model, model_columns
    if model is None:
        model, model_columns = _load()
    if model is None:
        raise HTTPException(status_code=503, detail="Model not trained yet. Run train_model.py first.")

    row = pd.DataFrame([{
        "focus_score": data.focus_score,
        "distraction_count": data.distraction_count,
        f"category_{data.category}": 1,
        f"priority_{data.priority}": 1,
    }])

    row = row.reindex(columns=model_columns, fill_value=0)
    predicted = round(float(model.predict(row)[0]))
    return {"predicted_time": max(1, predicted)}


# ── Clustering model ─────────────────────────────────────────────────────────
CLUSTER_MODEL_PATH  = os.path.join(os.path.dirname(__file__), "clustering_model.pkl")
CLUSTER_SCALER_PATH = os.path.join(os.path.dirname(__file__), "cluster_scaler.pkl")
CLUSTER_LABELS_PATH = os.path.join(os.path.dirname(__file__), "cluster_labels.pkl")

def _load_cluster():
    if not all(os.path.exists(p) for p in [CLUSTER_MODEL_PATH, CLUSTER_SCALER_PATH, CLUSTER_LABELS_PATH]):
        return None, None, None
    return (
        joblib.load(CLUSTER_MODEL_PATH),
        joblib.load(CLUSTER_SCALER_PATH),
        joblib.load(CLUSTER_LABELS_PATH),
    )

cluster_model, cluster_scaler, cluster_labels = _load_cluster()


class ClusterRequest(BaseModel):
    avg_duration:    float
    avg_focus:       float
    avg_distraction: float
    total_tasks:     int


@router.post("/predict-cluster")
def predict_cluster(data: ClusterRequest):
    global cluster_model, cluster_scaler, cluster_labels
    if cluster_model is None:
        cluster_model, cluster_scaler, cluster_labels = _load_cluster()
    if cluster_model is None:
        raise HTTPException(status_code=503, detail="Cluster model not trained yet. Run train_cluster_model.py first.")

    X       = np.array([[data.avg_duration, data.avg_focus, data.avg_distraction, data.total_tasks]])
    X_scaled = cluster_scaler.transform(X)
    cluster  = int(cluster_model.predict(X_scaled)[0])
    label    = cluster_labels.get(cluster, "Unknown")
    return {"cluster": cluster, "label": label}


class SuccessRequest(BaseModel):
    total_tasks: int
    avg_focus: float
    avg_distraction: float


@router.post("/predict-success")
def predict_success(data: SuccessRequest):
    global success_model
    if success_model is None:
        success_model = _load_success()
    if success_model is None:
        raise HTTPException(status_code=503, detail="Success model not trained yet. Run train_success_model.py first.")

    X = [[data.total_tasks, data.avg_focus, data.avg_distraction]]
    prediction = int(success_model.predict(X)[0])
    proba = success_model.predict_proba(X)[0]
    # handle model trained on single class (proba has only 1 column)
    probability = round(float(proba[1]) * 100, 1) if len(proba) > 1 else round(float(prediction) * 100, 1)
    return {"success": prediction, "probability": probability}

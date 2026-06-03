import psycopg2
from psycopg2 import pool

_pool = pool.ThreadedConnectionPool(
    minconn=2,
    maxconn=10,
    host="localhost",
    database="task_ai",
    user="postgres",
    password="4002"
)

def get_connection():
    return _pool.getconn()

def release_connection(conn):
    _pool.putconn(conn)

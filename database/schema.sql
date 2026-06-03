CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,
    email      VARCHAR(255) UNIQUE NOT NULL,
    mobile_number VARCHAR(20),
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TYPE priority_enum AS ENUM ('High', 'Medium', 'Low');

CREATE TABLE IF NOT EXISTS tasks (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
    title          VARCHAR(255) NOT NULL,
    category       VARCHAR(100) NOT NULL,
    priority       priority_enum NOT NULL DEFAULT 'Medium',
    status         VARCHAR(50)  NOT NULL DEFAULT 'Pending',
    estimated_time INT,
    actual_time    INT,
    due_date       TIMESTAMP,
    created_at     TIMESTAMP DEFAULT NOW(),
    completed_at   TIMESTAMP
);

CREATE TABLE IF NOT EXISTS task_logs (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id           UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    user_id           UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    start_time        TIMESTAMP NOT NULL DEFAULT NOW(),
    end_time          TIMESTAMP,
    duration          INT,
    focus_score       INT CHECK (focus_score BETWEEN 1 AND 5),
    distraction_count INT DEFAULT 0,
    created_at        TIMESTAMP DEFAULT NOW()
);

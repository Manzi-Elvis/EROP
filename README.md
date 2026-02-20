#  EROP — Enterprise Resource Optimization Platform

> A cloud-ready enterprise system that helps organizations intelligently manage workforce allocation, optimize project budgets, and detect resource risks before they happen.

---

##  Overview

EROP is a full-stack enterprise application built with **React + TypeScript** and **Node.js + PostgreSQL**.

It enables companies to:

-  Monitor employee utilization
-  Detect overloaded and underutilized resources
-  Track project budgets
-  Identify risk early
-  Make data-driven allocation decisions

This project demonstrates production-ready architecture, business intelligence logic, and scalable system design.

---

##  Architecture

```
Frontend (React + TypeScript)
        ↓
Node.js API (Express + TypeScript)
        ↓
PostgreSQL
```

Planned Extensions:

- ML Microservice (FastAPI)
- Dockerized Infrastructure
- AWS Deployment (RDS, ECS, S3)
- CI/CD Pipeline
- Monitoring & Logging

---

##  Core Features

###  Workforce Utilization Engine

- Aggregates allocation percentages
- Detects:
  - OVERLOADED (>100%)
  - UNDERUTILIZED (<50%)
  - OPTIMAL (50–100%)
- Real-time computation via SQL joins

###  Project Management

- Budget tracking
- Timeline monitoring
- Status management

###  Role-Based Structure (Planned)

- Admin
- Manager
- Employee

---

##  Tech Stack

### Frontend
- React
- TypeScript
- Axios
- Vite

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- pg
- JWT (planned)
- bcrypt (planned)

### Dev Tools
- ts-node-dev
- dotenv
- ESLint (recommended)
- Prettier (recommended)

---

##  Project Structure

### Backend

```
erop-backend/
 ├── src/
 │    ├── config/
 │    ├── controllers/
 │    ├── routes/
 │    ├── services/
 │    ├── models/
 │    ├── middlewares/
 │    ├── utils/
 │    └── server.ts
```

### Frontend

```
erop-frontend/
 ├── src/
 │    ├── pages/
 │    ├── components/
 │    ├── services/
 │    └── main.tsx
```

This structure follows separation of concerns and scalable service-layer architecture.

---

##  Installation & Setup

### 1️ Clone Repository

```bash
git clone https://github.com/Manzi-Elvis/EROP.git
cd EROP
```

---

### 2️ Backend Setup

```bash
cd erop-backend
npm install
```

Create `.env`:

```
PORT=5000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=erop_db
DB_HOST=localhost
```

Run development server:

```bash
npm run dev
```

---

### 3️ Database Setup

In PostgreSQL:

```sql
CREATE DATABASE erop_db;
```

Run schema:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  role VARCHAR(20),
  skills TEXT[]
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  budget NUMERIC,
  start_date DATE,
  end_date DATE,
  status VARCHAR(20)
);

CREATE TABLE allocations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  project_id INTEGER REFERENCES projects(id),
  allocation_percentage INTEGER,
  start_date DATE,
  end_date DATE
);
```

---

### 4️ Frontend Setup

```bash
cd erop-frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

##  API Endpoints

### GET `/api/utilization`

Returns:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "total_allocation": 120,
    "status": "OVERLOADED"
  }
]
```

---

##  Business Logic Example

The utilization engine:

```ts
SELECT 
  users.id,
  users.name,
  COALESCE(SUM(allocations.allocation_percentage), 0) as total_allocation
FROM users
LEFT JOIN allocations ON users.id = allocations.user_id
GROUP BY users.id
```

Classification Rules:

- >100% → OVERLOADED
- <50% → UNDERUTILIZED
- 50–100% → OPTIMAL

---

##  Future Enhancements

-  JWT Authentication
-  Role-based Authorization
-  ML-based Budget Risk Prediction
-  Docker Compose Setup
-  AWS Deployment
-  Unit & Integration Tests
-  Real-time Notifications
-  Graph Analytics Dashboard

---

##  Why This Project Matters

This is not a CRUD demo.

It demonstrates:

- Relational data modeling
- SQL aggregation logic
- Business intelligence processing
- Clean layered architecture
- API-driven frontend integration
- Enterprise readiness

---

##  What This Shows Recruiters

- You understand system architecture.
- You can build production-grade backend APIs.
- You work with relational databases correctly.
- You separate business logic from controllers.
- You think in terms of enterprise scalability.

---

## License

MIT

---

## Author

Manzi Rurangirwa Elvis  
Software Engineer | System Thinker | Builder

---
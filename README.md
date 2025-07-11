# Job Queue & Retry System API

A Node.js backend that manages background jobs asynchronously with retries and status tracking, using BullMQ and Redis.

---

## Features

- Add background jobs to process asynchronously
- Automatic retries on failure with exponential backoff
- Job status API to monitor progress and results
- User-scoped jobs (associate jobs with authenticated users)
- Real-time job monitoring with Bull Board UI
- Easy to extend with new job types and workers

---

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — API routing and middleware
- **BullMQ** — Job queue and processing library
- **Redis** — In-memory data store for queue backend
- **dotenv** — Environment variables management

---

## EndPoints

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| POST   | /api/jobs/createJobs | Add a new email job       |
| GET    | /api/jobs/:id/status | Get status of a job by ID |


## Getting Started

### Prerequisites

- Node.js v16+
- Redis server running locally or accessible remotely
- npm or yarn
- 
---

# Clone repo
https://github.com/Makhosetive7/Job-Queue-Retry-System.git

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Edit .env with your credentials

# Start dev server
npm run dev

---

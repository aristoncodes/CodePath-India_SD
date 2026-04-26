# CodePath India — Gamified Coding Platform

A modern, full-stack gamified coding platform designed to help students master Data Structures & Algorithms through competitive problem-solving, automated code evaluation, and classroom-based learning.

## 🚀 Features

### 🎯 Core
- **JWT-based authentication** with role-based access control (Student / Teacher / Admin)
- **Real-time code execution** via Judge0 API with multi-test-case evaluation
- **Monaco Editor** — VS Code-grade code editing experience in the browser
- **Codeforces integration** — 8000+ competitive programming problems imported automatically

### 👨‍🏫 Teacher Features
- **Create challenges** with title, description, difficulty rating, tags, and hidden test cases
- **Create classrooms** with Google Meet link, schedule days, and schedule time
- **Auto-generated join codes** — unique 6-character codes for student enrollment
- **Student progress tracking** via classroom rosters

### 🧑‍🎓 Student Features
- **Browse & solve challenges** with real-time feedback (Accepted, Wrong Answer, TLE, etc.)
- **Join classrooms** using join codes — one click to open Google Meet
- **Profile & stats** — solved count, rating, streak, submission history
- **Gamification** — leaderboard rankings, badge awards for milestones

### 🏆 Gamification
- **Global leaderboard** — ranked by total score and problems solved
- **Badges** — 🔥 First Blood, ⚡ Speed Demon, 🏆 Problem Crusher, 💎 Elite Coder
- **Difficulty ratings** — problems rated from 800 (Easy) to 2400+ (Expert)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite), TypeScript, Monaco Editor |
| Backend | Node.js, Express.js, TypeScript |
| Database | PostgreSQL (Neon), Prisma ORM |
| Auth | JWT, bcryptjs |
| Code Execution | Judge0 (RapidAPI) |
| External API | Codeforces API |
| Classroom | Google Meet Integration |

## 🏗️ Architecture

The system follows a **layered architecture** with strict separation of concerns:

```
Frontend (React + Vite)
    → Pages → Services → API Calls → AuthContext

Backend (Express.js + TypeScript)
    → Routes → Middlewares → Controllers → Services → Repositories

Database (PostgreSQL + Prisma ORM)
    → User, Challenge, Submission, Classroom, Leaderboard, Badge

External Services
    → Judge0 API | Codeforces API | Google Meet
```

### Design Patterns
| Pattern | Implementation | Purpose |
|---------|---------------|---------|
| **Singleton** | `PrismaClient` | Single database connection instance |
| **Factory** | `UserFactory`, `ChallengeFactory` | Create correct subtypes based on role/type |
| **Strategy** | `Judge0ExecutionStrategy`, `DryRunExecutionStrategy` | Swappable code execution engines |
| **Observer** | `LeaderboardObserver`, `BadgeObserver` | Decoupled side-effects on submission events |

### SOLID Principles
- **S** — Each class has one responsibility (Controller ≠ Service ≠ Repository)
- **O** — `Challenge` is open for extension (Manual, Codeforces) closed for modification
- **L** — `Student`, `Teacher`, `Admin` are substitutable for `User`
- **I** — `IAuthService`, `IExecutionStrategy` are focused, minimal interfaces
- **D** — Services depend on interfaces, not concrete implementations

## 📁 Project Structure

```
CodePath-India_SD/
├── backend/
│   ├── src/
│   │   ├── config/          # Database connection, env config
│   │   ├── controllers/     # HTTP request handlers
│   │   ├── services/        # Business logic layer
│   │   ├── repositories/    # Data access layer (Prisma)
│   │   ├── models/          # OOP class hierarchy (User, Challenge, etc.)
│   │   ├── interfaces/      # TypeScript interfaces (IAuthService, IUser, etc.)
│   │   ├── middlewares/     # Auth, RBAC, error handling, validation
│   │   ├── routes/          # Express routers
│   │   ├── factories/       # Factory pattern (UserFactory, ChallengeFactory)
│   │   ├── patterns/        # Strategy, Observer, Singleton implementations
│   │   ├── utils/           # JWT helpers, validators
│   │   └── types/           # Enums, DTOs
│   └── prisma/
│       └── schema.prisma    # Database schema (9 tables, 2 enums)
├── frontend/
│   ├── src/
│   │   ├── pages/           # Landing, Login, Register, Dashboard, Challenges,
│   │   │                    # SolveProblem, CreateChallenge, Classroom,
│   │   │                    # Leaderboard, Profile
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # AuthContext (global auth state)
│   │   ├── hooks/           # useAuth custom hook
│   │   ├── services/        # API client (Axios) & service functions
│   │   └── types/           # Shared TypeScript interfaces
├── docs/
│   ├── uml/                 # UML diagrams (Mermaid)
│   │   ├── use-case-diagram.md
│   │   ├── er-diagram.md
│   │   ├── class-diagram.md
│   │   └── sequence-diagram.md
│   └── report/
│       └── project-report.md
└── README.md
```

## 🗄️ Database Schema

| Table | Purpose |
|-------|---------|
| `User` | Base identity — name, email, passwordHash, role (STUDENT/TEACHER/ADMIN) |
| `Challenge` | Coding problems — title, description, difficulty, rating, tags, hidden testCases |
| `Submission` | Student code submissions — code, language, verdict, runtime, memory |
| `Classroom` | Teacher classrooms — name, joinCode, meetLink, scheduleDays, scheduleTime |
| `ClassroomMember` | Junction table — students ↔ classrooms (many-to-many) |
| `Leaderboard` | Per-student rankings — totalScore, problemsSolved |
| `Badge` | Achievement awards — name, icon, awardedAt |

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ✗ | Create a new account |
| POST | `/api/auth/login` | ✗ | Login and receive JWT |
| GET | `/api/users/profile` | ✓ | Get current user profile |
| GET | `/api/users/:id/stats` | ✓ | Get user stats & badges |
| GET | `/api/challenges` | ✗ | List all challenges |
| GET | `/api/challenges/:id` | ✗ | Get challenge details |
| POST | `/api/challenges` | Teacher | Create a challenge with hidden test cases |
| POST | `/api/submissions/submit` | ✓ | Submit code for multi-test-case evaluation |
| GET | `/api/leaderboard` | ✗ | Get global rankings |
| GET | `/api/classrooms` | ✓ | Get user's classrooms |
| POST | `/api/classrooms` | Teacher | Create a classroom with Meet link |
| POST | `/api/classrooms/join` | ✓ | Join a classroom via join code |

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- PostgreSQL database (local or [Neon](https://neon.tech))

### 1. Clone
```bash
git clone https://github.com/satyam19-prog/CodePath-India_SD.git
cd CodePath-India_SD
```

### 2. Backend
```bash
cd backend
npm install
```

Create a `.env` file:
```env
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
JWT_SECRET="your-secret-key"
JUDGE0_API_KEY="your-rapidapi-key"
```

Run the database setup and start the server:
```bash
npx prisma db push
npx prisma generate
npm run dev          # Runs on http://localhost:5001
```

### 3. Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:5001/api
```

Start the dev server:
```bash
npm run dev          # Runs on http://localhost:5173
```

## 📊 UML Diagrams

All diagrams are in `docs/uml/` using Mermaid syntax:

| Diagram | File | What It Shows |
|---------|------|---------------|
| **Use Case** | `use-case-diagram.md` | Actors (Student, Teacher, Admin, Judge0, Codeforces) and all features with include relationships |
| **ER Diagram** | `er-diagram.md` | All database tables, columns, keys, and cardinality relationships |
| **Class Diagram** | `class-diagram.md` | OOP hierarchy, inheritance, composition, associations, interfaces |
| **Sequence Diagram** | `sequence-diagram.md` | Complete code submission flow with loop and alt fragments |

## 👥 Team Members

| Name | Contribution |
|------|-------------|
| Satyam | Project setup, repo structure, UML diagrams, design patterns scaffold, TypeScript interfaces & enums, architecture |
| Jigyasu | Backend auth — JWT, bcrypt, AuthService, middleware, UserFactory, OOP models |
| Manya | Backend features — SubmissionService, Judge0, Leaderboard, Badge, Observer & Strategy patterns |
| Aditya | Frontend — all pages, AuthContext, Monaco Editor, API integration |

## 📄 License
MIT

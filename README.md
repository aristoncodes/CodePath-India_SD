# CodePath India — Advanced Coding Platform

A modern, gamified coding platform designed to help students master data structures and algorithms.

## 🚀 Features
- JWT-based authentication with RBAC (Student / Teacher / Admin)
- Real-time code execution via Judge0
- Codeforces problem integration
- Classroom management with join codes
- Global leaderboard & badge system
- Monaco Editor with syntax highlighting

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite), TypeScript, Monaco Editor |
| Backend | Node.js, Express.js, TypeScript |
| Database | MySQL (Aiven), Prisma ORM |
| Auth | JWT, bcryptjs |
| Code Execution | Judge0 (RapidAPI) |
| External API | Codeforces API |

## 📁 Project Structure
codepath-india/
├── backend/
│   ├── src/
│   │   ├── config/          # DB, env, logger
│   │   ├── controllers/     # Route handlers
│   │   ├── services/        # Business logic
│   │   ├── repositories/    # DB access layer
│   │   ├── models/          # OOP class models
│   │   ├── interfaces/      # TypeScript interfaces
│   │   ├── middlewares/     # Auth, RBAC, error handling
│   │   ├── routes/          # Express routers
│   │   ├── factories/       # Factory pattern
│   │   ├── patterns/        # Strategy, Observer, Singleton
│   │   ├── utils/           # JWT, hash, validators
│   │   └── types/           # Enums, DTOs
│   ├── prisma/              # Schema & migrations
│   └── tests/               # Unit & integration tests
├── frontend/
│   ├── src/
│   │   ├── components/      # UI components by feature
│   │   ├── pages/           # Route-level pages
│   │   ├── context/         # React Context (Auth, Theme)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API call functions
│   │   └── types/           # Shared TypeScript types
├── docs/
│   ├── uml/                 # All UML diagrams (Mermaid)
│   └── report/              # Project report
└── README.md

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MySQL database (local or Aiven)

### 1. Clone
```bash
git clone https://github.com/satyam19-prog/codepath-india.git
cd codepath-india
```

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env   # Fill in your values
npx prisma migrate dev --name init
npm run dev
```

### 3. Frontend
```bash
cd ../frontend
npm install
cp .env.example .env   # Fill in your values
npm run dev
```

## 🏗️ Architecture

The system follows a **layered architecture** with clear separation of concerns:

- **Controllers** handle HTTP requests and responses
- **Services** contain all business logic
- **Repositories** abstract all database operations via Prisma
- **Models** represent OOP classes with encapsulated data
- **Patterns** folder isolates design pattern implementations (Strategy, Observer, Singleton, Factory)

### Design Patterns Used
1. **Singleton** — `PrismaClient` ensures one DB connection
2. **Factory** — `UserFactory` and `ChallengeFactory` create correct subtypes
3. **Strategy** — `IExecutionStrategy` allows swapping Judge0 vs dry-run execution
4. **Observer** — `LeaderboardObserver` and `BadgeObserver` react to submission events

### SOLID Principles
- **S** — Each class has one responsibility (Service ≠ Controller ≠ Repository)
- **O** — `Challenge` is open for extension (Manual, Codeforces) closed for modification
- **L** — `Student`, `Teacher`, `Admin` are substitutable for `User`
- **I** — `IAuthService`, `IExecutionStrategy` are focused interfaces
- **D** — Services depend on interfaces, not concrete implementations

## 👥 Team Members
| Name | Contribution |
|------|-------------|
| Satyam | Backend architecture, API, Judge0 integration |
| [Member 2] | Frontend, UI/UX, Monaco Editor |
| [Member 3] | Database schema, Prisma, Auth |

## 📄 License
MIT

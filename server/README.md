
# TODO List API - Backend (Node.js + TypeScript)

This is the backend of a simple TODO list application developed with Node.js, TypeScript, and Express.js. It follows a clean architecture approach (Hexagonal Architecture) and applies design patterns such as **Factory** and **Facade**.

---

## ✅ Project Overview

The application exposes a RESTful API to manage tasks with basic CRUD operations (Create, Read, Update, Delete).

It simulates a database using in-memory storage and demonstrates principles of good modular architecture, error handling, and code structure.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

## 🗂️ Project Structure

```
src/
├── application/        
│   ├── facades/            # Encapsulate business logic (Facade Pattern)
├── domain/
│   ├── errors/             # Custom domain-specific error classes
│   ├── factories/          # Responsible for object creation (Factory Pattern)
│   ├── models/             # Define Task entity and interfaces
│   ├── services/           # Simulated database / memory service
├── infrastructure/
│   ├── controllers/        # Handle HTTP requests/responses
│   ├── middlewares/        # Express middlewares
│   ├── routes/             # Define Express routes
└── index.ts                # API entry point

```

---

## 🧱 Hexagonal Architecture

This project follows Hexagonal Architecture (Ports and Adapters), with:

- **Core Layer (Domain):**
  - `Task` entity (in `models/`)
  - Business rules (validation, update methods)

- **Application Layer (Adapters):**
  - `facades/` encapsulate all logic exposed to external layers.
  - `controllers/` are the interface between the user and the system.

- **Infrastructure Layer:**
  - `services/` simulate data storage.
  - `factories/` abstract object creation.

---

## 🧠 Design Patterns Used

### ✅ Factory Pattern

Used to create task objects. This ensures that the creation logic is centralized and consistent.

- Located in: `factories/TaskFactory.ts`

### ✅ Facade Pattern

Used to provide a simplified and centralized interface to all business logic (create, read, update, delete).

- Located in: `facades/TaskFacade.ts`

Controllers only interact with the facade.

---

## 🛠️ Technologies Used

- **Node.js**
- **TypeScript**
- **Express.js**
- In-memory storage (array)
- TSConfig and ESLint configured

---

## 📌 API Endpoints

### Create Task
- `POST /tasks`
```json
{
  "title": "My task",
  "description": "Something to do"
}
```

### Get All Tasks
- `GET /tasks`

### Get Task by ID
- `GET /tasks/:id`

### Update Task
- `PUT /tasks/:id`
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

### Delete Task
- `DELETE /tasks/:id`

---

## ❌ Error Handling

- Returns `404` if a task is not found.
- Validates that title is not empty on create and update (`400 Bad Request`).

---

## 🧾 License

MIT

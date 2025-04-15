# 📝 Task Management Microfrontend (Frontend)

This is the frontend implementation of the Task Management System using **Nuxt.js 3** (Vue 3), optionally enabling **Server-Side Rendering (SSR)**. It provides a complete **CRUD** interface for tasks by consuming an existing backend API. It also includes a local mock mode for frontend-only development.

---

## ⚙️ Features

- Create, Read, Update, and Delete tasks.
- SSR support using Nuxt.js.
- Mock mode support to develop without backend.
- Modular architecture suitable for microfrontend approaches.
- State management via Pinia.
- Error handling and form validation.
- Responsive UI with Tailwind CSS.

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

## 📁 Project Structure

```
src/
├── components/       # Reusable Vue components
├── composables/      # Reusable Vue components
├── layouts/          # Nuxt layouts
├── pages/            # Nuxt.js pages (routes)
├── services/         # API interaction logic (mock & real)
├── store/            # Global state management with Pinia
├── tests             # Testing components
├── app.vue           # Root Vue component

```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file (or use `.env.example`) and configure:

```
API_BASE_URL=http://localhost:3000
USE_MOCK_SERVICE=false # or true for mock-only frontend
```

---

## 🧪 Features Covered

### ✅ Create a Task

- Form with title and description
- Validates non-empty title
- Submits to `POST /tasks` or local mock

### ✅ List Tasks

- Uses `GET /tasks` or local mock
- Displayed in responsive table layout

### ✅ View Task by ID

- Detail page or modal per task (`/tasks/:id`)
- Uses `GET /tasks/:id`

### ✅ Update Task

- Edit view with pre-filled data
- PUT request to `/tasks/:id`

### ✅ Delete Task

- Button in task list
- Deletes via `DELETE /tasks/:id`

---

## 🧩 Microfrontend Architecture

Each major functionality (CRUD) is implemented as a separate module:

- **Services**: Decoupled logic (`useTaskService`)
- **Store**: Pinia store handles global state (`useTasksStore`)
- **Components**: `TaskForm`, `TaskList`, `TaskDetail`
- These can be later split and federated via Module Federation or Nuxt islands

---

## 🧠 Technical Decisions

- Used **Pinia** instead of Vuex for simplicity and Nuxt 3 integration.
- Created `useTaskService` composable with mock + real API duality.
- Mock state is persistent within app lifecycle and shared.
- UI built with **Tailwind CSS** for fast prototyping and responsiveness.

---

## 🧪 Optional Extras

- ✅ SSR support via Nuxt
- ⏳ Could be extended with localStorage or IndexedDB persistence for mocks
- ⏳ Tests (not full coverage) can be written with Vitest or Jest

---

## 📌 Notes

- Backend must be running on the same base URL if `USE_MOCK_SERVICE` is false.
- Mock mode is great for rapid frontend development or offline testing.

---

## 📦 License

MIT
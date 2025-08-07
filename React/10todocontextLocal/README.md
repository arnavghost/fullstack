
# 📝 Todo App

A minimal, responsive Todo List app built with:

* ⚛️ React + Vite
* 🎯 Context API for state management
* 💨 Tailwind CSS for styling
* 💾 LocalStorage for data persistence

## 📸 Preview

![App Screenshot](https://via.placeholder.com/800x400?text=Todo+App+Preview) <!-- Replace with your app screenshot or remove if not needed -->

---

## 🚀 Features

✅ Add, edit, and delete todos
✅ Mark todos as completed
✅ Inline editing with auto save
✅ Persistent data using localStorage
✅ Clean UI with responsive design

---

## 🧠 Tech Stack

* React (via Vite)
* Tailwind CSS
* Context API
* JavaScript (ES6+)
* LocalStorage API

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── index.js
├── contexts/
│   ├── TodoContext.js
│   └── index.js
├── App.jsx
└── main.jsx
```

---

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/todo-app.git
```

2. Navigate into the project

```bash
cd todo-app
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

---

## 📌 How It Works

* All todos are stored in localStorage, ensuring data is saved even after page reload.
* Context API handles global state for todos.
* Users can:

  * Add new todos using the input form.
  * Toggle completed status.
  * Edit todos inline (disabled when completed).
  * Delete any todo.

---

## 🎨 UI Example

| Action    | Screenshot               |
| --------- | ------------------------ |
| Add Todo  | ✅ Clean input form       |
| Edit Todo | ✏️ Inline editable field |
| Completed | ✅ Green highlight        |

---

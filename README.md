# TaskManager Pro

A Kanban-style task management app built with React, Redux, and Vite.

## Features

- **Kanban Board** – Drag-and-drop tasks across columns (To Do, In Progress, In Review, Done)
- **Task CRUD** – Create, read, update (status), and delete tasks with confirmation
- **Search** – Filter tasks by title or description
- **Analytics** – Stats and charts (pie chart, workload bar chart)
- **Team** – View members and their assigned/completed task counts
- **Landing Page** – Animated hero with interactive dot grid and shiny text
- **Persistence** – Tasks saved to `localStorage`

## Tech Stack

- **React 19** + **Vite 7**
- **Redux Toolkit** – State management
- **React Router** – Routing
- **Recharts** – Analytics charts
- **GSAP** – Dot grid animations
- **Motion** – Shiny text effect
- **styled-components** – Get Started button

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx              # Root layout, routes
├── main.jsx             # Entry point
├── index.css            # Global styles
├── ilyas/               # Shared components
│   ├── Header.jsx       # Nav, search, New Task button
│   ├── CreateTaskModal.jsx
│   ├── DeleteConfirmModal.jsx
│   ├── Toast.jsx
│   ├── Analytics.jsx
│   ├── Footer.jsx
│   └── NotFound.jsx
├── mustapha/            # Board & landing
│   ├── board.jsx        # Kanban board
│   ├── TaskColumn.jsx   # Reusable column
│   ├── taskContainers.css
│   └── landingPage/
│       ├── hero.jsx
│       ├── GetStartedButton.jsx
│       ├── dotGridBg/   # Interactive dot grid
│       └── shinyText/   # Shine animation
├── azzedine/
│   └── team.jsx         # Team page
└── redux/
    ├── store.js
    ├── tasksSlice.js    # Tasks, members, notifications, search
    └── selectors.js
```

## Routes

| Path        | Page         |
| ----------- | ------------ |
| `/`         | Landing      |
| `/board`    | Kanban board |
| `/analysis` | Analytics    |
| `/team`     | Team         |
| `*`         | 404          |

## License

Private project.

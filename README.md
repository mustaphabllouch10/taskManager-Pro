# TaskManager Pro
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind/CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A Kanban-style task management app .

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

## Project Structure

```
src/
├── App.jsx                          # Root layout, routes
├── main.jsx                         # Entry point
├── styles/
│   ├── index.css                    # Global styles
│   └── team.css                     # Team page styles
├── pages/                           # Full-screen page components
│   ├── LandingPage.jsx
│   ├── BoardPage.jsx
│   ├── AnalyticsPage.jsx
│   ├── TeamPage.jsx
│   └── NotFoundPage.jsx
├── components/                      # Shared UI components
│   ├── layout/
│   │   ├── Header.jsx               # Nav, search, New Task button
│   │   └── Footer.jsx
│   ├── common/
│   │   ├── ScrollToTop.jsx
│   │   └── Toast.jsx                # Notification component
│   └── security/
│       └── ProtectedRoute.jsx       # Auth guard
├── features/                        # Feature modules (domain-based)
│   ├── auth/
│   │   └── Login.jsx                # Login page
│   ├── board/                       # Kanban board
│   │   ├── TaskColumn.jsx           # Reusable column
│   │   ├── CreateTaskModal.jsx      # New task form
│   │   ├── DeleteConfirmModal.jsx   # Delete confirmation
│   │   └── TaskContainers.css
│   └── landing/                     # Landing page feature
│       ├── components/
│       │   ├── Hero.jsx             # Hero section
│       │   ├── FeaturesSection.jsx  # Features showcase
│       │   ├── StepsSection.jsx     # Steps to use
│       │   ├── ShinyText.jsx        # Text animation
│       │   ├── DotGrid.jsx          # Interactive dot grid
│       │   └── GetStartedButton.jsx # CTA button
│       └── styles/
│           ├── hero.css
│           ├── shinyText.css
│           ├── dotGrid.css
│           └── stepsSection.css
├── redux/                           # State management
│   ├── store.js                     # Redux store config
│   ├── selectors.js                 # State selectors
│   └── slices/
│       └── tasksSlice.js            # Tasks, members, notifications, auth
└── utils/
    └── stringUtils.js               # Helper functions
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

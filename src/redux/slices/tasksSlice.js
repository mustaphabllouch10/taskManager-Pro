/**
 * Tasks slice - handles all task state, members, notifications, and search.
 * State structure: { tasks, nextTaskId, members, notification, draggedTask, searchTerm }
 */
import { createSlice } from '@reduxjs/toolkit';

export const STORAGE_KEY = 'myTasks';

const DEFAULT_FIRST_TASK = {
  id: 1,
  title: 'Design System',
  status: 'todo',
  assignee: 'azzeddine belahnine',
  description: 'Fix colors',
  priority: 'high',
  due: '2026-12-31',
};

// ===== Load tasks from localStorage =====

const loadTasksFromStorage = () => {
  let tasks = [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    tasks = stored ? JSON.parse(stored) : [];
  } catch {
    tasks = [];
  }
  if (!Array.isArray(tasks)) tasks = [];

  if (!tasks.find((t) => t.id === 1)) {
    tasks = [DEFAULT_FIRST_TASK, ...tasks];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  return tasks;
};

// ===== Initial state =====
const loadedTasks = loadTasksFromStorage();
const initialState = {
  nextTaskId: loadedTasks.length ? Math.max(...loadedTasks.map((t) => t.id)) + 1 : 2,
  members: [
    { id: 1, name: 'ilyas lhouari', role: 'manager', color: '#3b82f6' },
    { id: 2, name: 'azzeddine belahnine', role: 'designer', color: '#d946ef' },
    { id: 3, name: 'mustapha bllouch', role: 'developer', color: '#f97316' },
  ],
  notification: {
    show: false,
    message: '',
    type: 'success',
  },
  tasks: loadedTasks,
  draggedTask: null,
  searchTerm: '',
  isAuthenticated: false,
  user: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: state.nextTaskId,
      });
      state.nextTaskId++;
    },

    // Used when dropping a task into a new column (drag-and-drop)
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.status = status;
    },

    // Action to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },

    // Tracks which task is being dragged (id or null)
    setDraggedTask: (state, action) => {
      state.draggedTask = action.payload;
    },

    // Action to set search term
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // Toast message. type: 'success' | 'error'
    showNotification: (state, action) => {
      state.notification = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || 'success',
      };
    },

    // Preserves message/type so Toast can fade out smoothly
    hideNotification: (state) => {
      state.notification = { ...state.notification, show: false };
    },

    // Simulated login action
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
    },

    // Simulated logout action
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {
  addTask,
  updateTaskStatus,
  deleteTask,
  setDraggedTask,
  setSearchTerm,
  showNotification,
  hideNotification,
  login,
  logout,
} = tasksSlice.actions;

export default tasksSlice.reducer;

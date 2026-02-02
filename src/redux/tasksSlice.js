/**
 * Tasks slice - handles all task state, members, notifications, and search.
 * State structure: { tasks, nextTaskId, members, notification, draggedTask, searchTerm }
 */
import { createSlice } from '@reduxjs/toolkit';

// ===== Load tasks from localStorage =====
// Runs at module load. Prevents crash if stored data is corrupted.
const loadTasksFromStorage = () => {
  const firstTask = {
    id: 1,
    title: "Design System",
    status: "todo",
    assigne: "azzeddine belahnine",
    description: "Fix colors",
    priority: "high",
    due: "2026-12-31"
  };

  let tasks = [];
  try {
    const stored = localStorage.getItem('myTasks');
    tasks = stored ? JSON.parse(stored) : [];
  } catch {
    tasks = [];
  }
  if (!Array.isArray(tasks)) tasks = [];

  if (!tasks.find(t => t.id === 1)) {
    tasks = [firstTask, ...tasks];
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }

  return tasks;
};

// ===== Initial state =====
const loadedTasks = loadTasksFromStorage();
const initialState = {
  // Avoid ID collision: nextTaskId must be > max existing id
  nextTaskId: loadedTasks.length ? Math.max(...loadedTasks.map(t => t.id)) + 1 : 2,
  members: [
    { id: 1, name: "ilyas lhouari", role: "manager", color: "#3b82f6" },
    { id: 2, name: "azzeddine belahnine", role: "designer", color: "#d946ef" },
    { id: 3, name: "mustapha bllouch", role: "developer", color: "#f97316" },
  ],
  notification: {
    show: false,
    message: '',
    type: 'success',
  },
  tasks: loadedTasks,
  draggedTask: null,
  searchTerm: '',
};

// 3. Create the slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Assign nextTaskId to avoid ID collision
      state.tasks.push({
        ...action.payload,
        id: state.nextTaskId,
      });
      state.nextTaskId++;
    },

    // Used when dropping a task into a new column (drag-and-drop)
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.status = status;
      }
    },

    // Action to delete a task
    deleteTask: (state, action) => {
      // action.payload is the task id to remove
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
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
        type: action.payload.type || 'success'
      };
    },

    // Preserves message/type so Toast can fade out smoothly
    hideNotification: (state) => {
      state.notification = { ...state.notification, show: false };
    },
  }
});

// Export actions and reducer
export const { addTask, updateTaskStatus, deleteTask, setDraggedTask,
  setSearchTerm, showNotification, hideNotification
} = tasksSlice.actions;

export default tasksSlice.reducer;
/**
 * Redux store configuration.
 * Single slice for all app state (tasks, members, notifications, etc).
 */
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { STORAGE_KEY } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Persist tasks to localStorage on every state change.
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks.tasks));
});
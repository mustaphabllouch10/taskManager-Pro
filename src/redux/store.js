/**
 * Redux store configuration.
 * Single slice for all app state (tasks, members, notifications, etc).
 */
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Persist tasks to localStorage on every state change.
// Keeps reducers pure by moving side effects outside the slice.
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('myTasks', JSON.stringify(state.tasks.tasks));
});
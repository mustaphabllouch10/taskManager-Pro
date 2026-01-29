import { createSlice } from '@reduxjs/toolkit';

// 1. Define the initial state with real sample data
const initialState = {
  members: [
    { id: 1, name: "ilyas lhouari", role: "manager" },
    { id: 2, name: "azzeddine belahnine", role: "designer" },
    { id: 3, name: "mustapha bllouch", role: "developer" },
  ],
  tasks: [
    {
      id: 1,
      title: "sample task 1 ",
      status: "todo",
      assigne: "mustapha bllouch",
      description: "this is a sample task description",
      priority: "high",
      due: "2026-12-31"
    },
    {
      id: 2,
      title: "sample task 2 ",
      status: "inprogress",
      assigne: "ilyas lhouari",
      description: "this is a sample task description",
      priority: "medium",
      due: "2026-11-30"
    },
  ]
};

// 2. Create the slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Action to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // Action to update task status
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.status = status;
      }
    },
    // Action to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    }
  }
});

// Export actions and reducer
export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
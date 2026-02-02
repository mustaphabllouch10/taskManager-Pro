/**
 * Redux selectors - plain functions that extract state.
 * Use with useSelector(selectTasks) in components.
 */
export const selectTasks = (state) => state.tasks.tasks;
export const selectMembers = (state) => state.tasks.members;
export const selectDraggedTask = (state) => state.tasks.draggedTask;
export const selectSearch = (state) => state.tasks.searchTerm;
export const selectNotification = (state) => state.tasks.notification;

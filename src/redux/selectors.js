import { useSelector } from 'react-redux';

export const selectTasks = () => {
    return useSelector(state => state.tasks.tasks);
}
export const selectMembers = () => {
    return useSelector(state => state.tasks.members);
}
export const selectDraggedTask = () => {
    return useSelector(state => state.tasks.draggedTask);
}
export const selectSearch = () => {
    return useSelector(state => state.tasks.searchTerm);
}

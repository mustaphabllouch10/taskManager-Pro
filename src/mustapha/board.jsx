/**
 * Kanban board - four columns (To Do, In Progress, In Review, Done).
 * Manages delete confirmation modal. Filters tasks by search and status.
 */
import { useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskColumn from "./TaskColumn";
import DeleteConfirmModal from "../ilyas/DeleteConfirmModal";
import { selectTasks, selectMembers, selectSearch } from "../redux/selectors";
import { deleteTask, showNotification } from "../redux/tasksSlice";
import "./taskContainers.css";

const Board = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);
  const tasks = useSelector(selectTasks);
  const searchTerm = useSelector(selectSearch);

  const [deleteModal, setDeleteModal] = useState({ isOpen: false, task: null });

  // Filter by search term (title + description). Fallback to '' for undefined.
  const filteredTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          (task.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (task.description || "").toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [tasks, searchTerm]
  );

  const filteredByStatus = useMemo(
    () => ({
      todo: filteredTasks.filter((t) => t.status === "todo"),
      inprogress: filteredTasks.filter((t) => t.status === "inprogress"),
      inreview: filteredTasks.filter((t) => t.status === "inreview"),
      done: filteredTasks.filter((t) => t.status === "done"),
    }),
    [filteredTasks]
  );

  // Maps member name to avatar color. Fallback for unknown assignees.
  const getMemberColor = useCallback(
    (name) => {
      const member = members.find((m) => m.name === name);
      return member ? member.color : "#6366f1";
    },
    [members]
  );

  const handleRequestDelete = useCallback((task) => {
    setDeleteModal({ isOpen: true, task });
  }, []);

  const handleDeleteConfirm = useCallback(
    (taskId) => {
      dispatch(deleteTask(taskId));
      dispatch(showNotification({ message: "Task deleted", type: "error" }));
      setDeleteModal({ isOpen: false, task: null });
    },
    [dispatch]
  );

  const handleDeleteCancel = useCallback(() => {
    setDeleteModal({ isOpen: false, task: null });
  }, []);

  return (
    <div className="board">
      <TaskColumn
        status="todo"
        label="To Do"
        tasks={filteredByStatus.todo}
        getMemberColor={getMemberColor}
        onRequestDelete={handleRequestDelete}
      />
      <TaskColumn
        status="inprogress"
        label="In Progress"
        tasks={filteredByStatus.inprogress}
        getMemberColor={getMemberColor}
        onRequestDelete={handleRequestDelete}
      />
      <TaskColumn
        status="inreview"
        label="In Review"
        tasks={filteredByStatus.inreview}
        getMemberColor={getMemberColor}
        onRequestDelete={handleRequestDelete}
      />
      <TaskColumn
        status="done"
        label="Done"
        tasks={filteredByStatus.done}
        getMemberColor={getMemberColor}
        onRequestDelete={handleRequestDelete}
      />

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        task={deleteModal.task}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default Board;
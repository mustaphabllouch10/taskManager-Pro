/**
 * Reusable Kanban column - one status (todo, inprogress, inreview, done).
 * Handles drag-and-drop. Delete button opens confirmation modal (parent handles it).
 */
import { useDispatch, useSelector } from "react-redux";
import { FiCalendar, FiTrash2 } from "react-icons/fi";
import { updateTaskStatus, setDraggedTask } from "../redux/tasksSlice";
import { selectDraggedTask } from "../redux/selectors";
import "./taskContainers.css";

const TaskColumn = ({ status, label, tasks, getMemberColor, onRequestDelete }) => {
  const dispatch = useDispatch();
  const draggedTask = useSelector(selectDraggedTask);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = () => dispatch(updateTaskStatus({ status, id: draggedTask }));
  const handleDragStart = (taskId) => () => dispatch(setDraggedTask(taskId));
  const handleDragEnd = () => dispatch(setDraggedTask(null));

  return (
    <div
      className="task-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="header-tasks">
        <div>
          <span className={`dot ${status}`} />
          <p>{label}</p>
        </div>
        <span className="task-counter">{tasks.length}</span>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-card"
            draggable
            onDragStart={handleDragStart(task.id)}
            onDragEnd={handleDragEnd}
          >
            <span className={`priority ${task.priority}`}>{task.priority}</span>
            <button
              type="button"
              className="delete-btn"
              onClick={() => onRequestDelete(task)}
            >
              <FiTrash2 size={16} />
            </button>
            <h4 className="task-title">{task.title}</h4>
            <p className="task-desc">{task.description}</p>
            <div className="task-footer">
              <div className="due">
                <FiCalendar size={14} />
                <span>{task.due}</span>
              </div>
              <div
                className="avatar"
                style={{ backgroundColor: getMemberColor(task.assigne) }}
              >
                {/* Initials from name. Fallback for undefined/empty assignee */}
                {(task.assigne || "?")
                  .split(/\s+/)
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase() || "?"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;

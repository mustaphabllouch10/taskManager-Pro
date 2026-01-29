import { selectTasks , selectMembers  , selectDraggedTask} from "../redux/selectors";
import "./taskContainers.css";
import { FiCalendar } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import { updateTaskStatus } from "../redux/tasksSlice";
import { setDraggedTask } from "../redux/tasksSlice";





const Done = () => {
    const dispatch = useDispatch();
    const tasks = selectTasks(); 
    const members = selectMembers();
    const draggedTask = selectDraggedTask();
    

    const doneTasks = tasks.filter(task => task.status === "done");
    
  return (
    <div className="task-container"
    onDragOver={(e) => e.preventDefault()}
    onDrop={() => dispatch(updateTaskStatus({status: "done", id: draggedTask}))}
    >
        <div className="header-tasks">
            <div>
                <span className="dot done"></span>
                <p>Done</p>
            </div>
            
            <span className="task-counter">{doneTasks.length}</span>
        </div>
        <div className="tasks">
  {doneTasks.map(task => (
    <div key={task.id} className="task-card" draggable 
    onDragStart={() => dispatch(setDraggedTask(task.id))}
    onDragEnd={() => dispatch(setDraggedTask(null))}
    >
      
      <span className={`priority ${task.priority}`}>
        {task.priority}
      </span>
      <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTask(task.id))}
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

        <div className="avatar">
          {task.assigne
            .split(" ")
            .map(n => n[0])
            .join("")
            .toUpperCase()}
        </div>
      </div>

    </div>
  ))}
</div>

    </div>

);
}

export default Done;
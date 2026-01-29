import { selectTasks , selectMembers } from "../redux/selectors";
import "./taskContainers.css";
import { FiCalendar } from "react-icons/fi";


const Todo = () => {

    const tasks = selectTasks(); 
    const members = selectMembers();
    console.log("Tasks:", tasks);
    console.log("Members:", members);

    const todoTasks = tasks.filter(task => task.status === "todo");
    
  return (
    <div className="task-container">
        <div className="header-tasks">
            <div>
                <span className="dot todo"></span>
                <p>To Do</p>
            </div>
            
            <span className="task-counter">{todoTasks.length}</span>
        </div>
       <div className="tasks">
  {todoTasks.map(task => (
    <div key={task.id} className="task-card" draggable>
      
      <span className={`priority ${task.priority}`}>
        {task.priority}
      </span>

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

export default Todo;
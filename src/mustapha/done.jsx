import { selectTasks , selectMembers } from "../redux/selectors";
import "./taskContainers.css";
import { FiCalendar } from "react-icons/fi";


const Done = () => {

    const tasks = selectTasks(); 
    const members = selectMembers();
    console.log("Tasks:", tasks);
    console.log("Members:", members);

    const doneTasks = tasks.filter(task => task.status === "done");
    
  return (
    <div className="task-container">
        <div className="header-tasks">
            <div>
                <span className="dot done"></span>
                <p>Done</p>
            </div>
            
            <span className="task-counter">{doneTasks.length}</span>
        </div>
        <div className="tasks">
  {doneTasks.map(task => (
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

export default Done;
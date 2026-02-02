import Todo from "./todo";
import InReview from "./inReview";
import Done from "./done";
import InProgress from "./inProgress";
import { selectTasks, selectMembers, selectSearch } from "../redux/selectors";
import "./taskContainers.css";

const Borad = () => {
    const members = selectMembers();
    const tasks = selectTasks();
    const searchTerm = selectSearch();

    // Function to get member color by name
    const getMemberColor = (name) => {
        const member = members.find(m => m.name === name);
        return member ? member.color : '#6366f1';
    };

    // Filter tasks based on the search term
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="board">
            <Todo
                tasks={filteredTasks.filter(t => t.status === 'todo')}
                getMemberColor={getMemberColor}
            />
            <InProgress
                tasks={filteredTasks.filter(t => t.status === 'inprogress')}
                getMemberColor={getMemberColor}
            />
            <InReview
                tasks={filteredTasks.filter(t => t.status === 'inreview')}
                getMemberColor={getMemberColor}
            />
            <Done
                tasks={filteredTasks.filter(t => t.status === 'done')}
                getMemberColor={getMemberColor}
            />
        </div>
    )

}

export default Borad;
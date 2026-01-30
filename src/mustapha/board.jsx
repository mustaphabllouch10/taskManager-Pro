import Todo from "./todo";
import InReview from "./inReview";
import Done from "./done";
import InProgress from "./inProgress";
import { selectMembers } from "../redux/selectors";
import "./taskContainers.css";

const Borad = () => {
    const members = selectMembers();
    const getMemberColor = (name) => {
        const member = members.find(m => m.name === name);
        return member ? member.color : '#6366f1';
    };

    return (
        <div className="board">
            <Todo getMemberColor={getMemberColor} />
            <InProgress getMemberColor={getMemberColor} />
            <InReview getMemberColor={getMemberColor} />
            <Done getMemberColor={getMemberColor} />
        </div>
    )

}

export default Borad;
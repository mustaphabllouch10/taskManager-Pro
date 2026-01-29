import Todo from "./todo";
import InReview from "./inReview";
import Done from "./done";
import InProgress from "./inProgress";
import "./taskContainers.css";

const Borad = () => {

    return (
        <div className="board">
            <Todo />
            <InProgress />
            <InReview />
            <Done />
        </div>
    )

}

export default Borad;
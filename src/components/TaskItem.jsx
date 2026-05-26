function TaskItem({ item, index, deleteTask }) {

    return (

        <li>

            <span>{item}</span>

            <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
            >
                Delete
            </button>

        </li>
    );
}

export default TaskItem;
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {

    return (

        <ul>

            {tasks.map((item, index) => (

                <TaskItem
                    key={index}
                    item={item}
                    index={index}
                    deleteTask={deleteTask}
                />

            ))}

        </ul>
    );
}

export default TaskList;
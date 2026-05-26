function TaskForm({ task, setTask, addTask }) {

    return (

        <div className="input-section">

            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>
                Add Task
            </button>

        </div>
    );
}

export default TaskForm;
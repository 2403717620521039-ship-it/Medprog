import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tasks Updated");// updated
  }, [tasks]);

  const addTask = () => {

    if(task.trim() === ""){
      alert("Task cannot be empty");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (

    <div className="container">

      <h1>MedQueue Task Manager</h1>

      <TaskForm
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <h3>Total Tasks: {tasks.length}</h3>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;
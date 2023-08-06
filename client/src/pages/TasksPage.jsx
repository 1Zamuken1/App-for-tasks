import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks.api";
import TaskCard from "../components/taskCard";

function TasksPage(){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const response = await getTaskRequest()
            setTasks(response.data)
        }
        loadTasks()
    }, []);

    function renderMain(){
        if(tasks.length == 0) return <h1>No task yet</h1>
        return tasks.map(task => ( <TaskCard task={task} key={task.id} /> ))
    }

    return(
        <div>
            <h1>Tasks</h1>
            {renderMain()}
        </div>
    )
}

export default TasksPage
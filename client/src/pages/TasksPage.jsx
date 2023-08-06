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
    return(
        <div>
            <h1>
                Tasks
            </h1>

            {
                tasks.map(task => (
                    <TaskCard task={task} key={task.id} />
                ))
            }
        </div>
    )
}

export default TasksPage
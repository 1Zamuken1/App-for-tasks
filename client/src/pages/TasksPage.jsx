import { useEffect } from "react";
import TaskCard from "../components/taskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage(){

    const { tasks, loadTasks } = useTasks()

    useEffect(() => {
        loadTasks()
    }, []);

    function renderMain(){
        if(tasks.length == 0) return <h1>No task yet</h1>
        return tasks.map(task => ( <TaskCard task={task} key={task.id} /> ))
    }

    return(
        <div>
            <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
            <div className="grid grid-cols-4 gap-3">
            {renderMain()}
            </div>
        </div>
    )
}

export default TasksPage
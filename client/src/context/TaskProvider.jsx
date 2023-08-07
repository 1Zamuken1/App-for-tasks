import { createContext, useContext, useState } from "react";
import { getTaskRequest, deleteTaskRequest, CreateTaskRequest } from "../api/tasks.api";
import { TaskContext } from "./TaskContext";
export const useTasks = () =>{
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("useTask must be used withing a TaskContextProvider");
    }
    return context;
}
export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // function load
    async function loadTasks() {
        const response = await getTaskRequest();
        setTasks(response.data);
    }

    // function delete

    const deleteTask = async (id)=>{
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    // function create
    const createTask = async (task) => {
        try {
            const response = await CreateTaskRequest(task);
            console.log(response);
        } catch (error) {
            console.error(error);
            
        }
    }

    return(
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
        { children }
    </TaskContext.Provider>);
}
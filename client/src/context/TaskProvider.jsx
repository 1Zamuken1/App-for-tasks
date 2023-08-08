import { createContext, useContext, useState } from "react";
import { 
    getTasksRequest, 
    deleteTaskRequest, 
    CreateTaskRequest, 
    getTaskRequest,
    updateTaskRequest 
} from "../api/tasks.api";
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

    // Load function
    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response.data);
    }

    // Delete function
    const deleteTask = async (id)=>{
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    // Create function
    const createTask = async (task) => {
        try {
            const response = await CreateTaskRequest(task);
            console.log(response);
        } catch (error) {
            console.error(error);
            
        }
    }

    // Update function
    const getTask = async (id) =>{
        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return(
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}>
        { children }
    </TaskContext.Provider>);
}
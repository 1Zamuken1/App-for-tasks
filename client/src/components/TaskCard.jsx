import React from 'react';
import { deleteTaskRequest } from '../api/tasks.api';

export default function taskCard( {task} ) {

    const handleDelete = async (id)=>{
        try {
            const respone = await deleteTaskRequest(id);
            console.log(respone);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        <h2>{ task.title }</h2>
        <p>{ task.description }</p>
        <span>{ task.done == 1 ? "✔️" : "❌" }</span>
        <span>{ task.createAt }</span>

        <button onClick={() => handleDelete(task.id)}>Delete</button>
        <button>Edit</button>
    </div>
  );
}

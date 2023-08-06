import React from 'react'

export default function taskCard( {task} ) {
  return (
    <div>
        <h2>{ task.title }</h2>
        <p>{ task.description }</p>
        <span>{ task.done == 1 ? "✔️" : "❌" }</span>
        <span>{ task.createAt }</span>

        <button>Delete</button>
        <button>Edit</button>
    </div>
  );
}

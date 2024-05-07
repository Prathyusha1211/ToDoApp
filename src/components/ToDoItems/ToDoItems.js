import React from "react";
import './ToDoItems.css'

export default function ToDoItems({task, completed, onClickStrikeTodo}) {
    return (
        <>
            <li onClick={onClickStrikeTodo} className={completed ? "completed" : ""}>
                {task}
            </li>
        </>

    );
}
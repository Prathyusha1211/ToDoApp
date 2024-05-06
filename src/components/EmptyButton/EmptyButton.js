import React from "react";
import ToDoList from "../ToDoList/ToDoList";
export default function EmptyButton({onEmptyButtonClick}){

    return(
        <button onClick={onEmptyButtonClick}>Empty</button>
    );
}
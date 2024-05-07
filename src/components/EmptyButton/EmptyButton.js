import React from "react";
import ToDoList from "../ToDoList/ToDoList";
export default function EmptyButton({onEmptyButtonClick,title}){

    return(
        <button onClick={onEmptyButtonClick}>{title}</button>
    );
}
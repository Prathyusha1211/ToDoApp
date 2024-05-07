import React from "react";
import ToDoList from "../ToDoList/ToDoList";
import './EmptyButton.css'
export default function EmptyButton({onEmptyButtonClick,title}){

    return(
        <button className="empty-button" onClick={onEmptyButtonClick}>{title}</button>
    );
}
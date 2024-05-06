import React, {useState} from "react";
import ToDoItems from "../ToDoItems/ToDoItems";
import './ToDoList.css'
import EmptyButton from "../EmptyButton/EmptyButton";

export default function ToDoList(){
    const [todos,setTodos] = useState([
        {id:0,task:"Read SpringBoot"},
        {id:1,task:"Complete Assignments"},
        {id:2,task:"Prepare Breakfast"},
        {id:3,task:"Sleep for 2 hours"},
        {id:4,task:"Take a shower"},
    ])

    const getToDoItems = () => {
        return todos.map((item,index)=>{
            return(
                <ToDoItems task={item.task} key={item.id}/>
            );

        })
    }

    const emptyTodo=()=>{
        setTodos([]);
    }

    return(
        <>
            {
                todos.length > 0 ? <ul type="i">{getToDoItems()}</ul> : <i><h4>Nothing to do buddy. Sleep!!</h4></i>
            }
            <EmptyButton onEmptyButtonClick={emptyTodo}/>
        </>

        //<h4>Nothing to do buddy. Sleep!!</h4>
    );
}
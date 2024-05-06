import React, {useState} from "react";

export default function ToDoList(){
    const [todos,setTodos] = useState([
        {"id":1,"task":""}
    ])
    return(
            <h4>Nothing to do buddy. Sleep!!</h4>
    );
}
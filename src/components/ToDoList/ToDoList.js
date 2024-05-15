import React, {useState} from "react";
import ToDoItems from "../ToDoItems/ToDoItems";
import './ToDoList.css'
import EmptyButton from "../EmptyButton/EmptyButton";
import Header from "../Header/Header";
import AddButton from "../AddButton/AddButton";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {id: 0, task: "Read SpringBoot", completed: false},
        {id: 1, task: "Complete Assignments", completed: false},
        {id: 2, task: "Prepare Breakfast", completed: false},
        {id: 3, task: "Sleep for 2 hours", completed: false},
        {id: 4, task: "Take a shower", completed: false},
    ])

    const addTask = (taskName) => {
        const newTodo = {
            id: todos.length,
            task: taskName,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const [someTodosRemoved, setSomeTodosRemoved] = useState(false)

    const removeCompletedTasks = () => {
        const newToDoList = todos.filter((item) => {
            if (!item.completed) return item;
        });
        const checkSomeTasksCompleted = newToDoList.some((item) => item.completed);
        setSomeTodosRemoved(checkSomeTasksCompleted);
        setTodos(newToDoList);
    };

    const markCompletedTodo = (id) => {
        const newToDoList = todos.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        const checkSomeTasksCompleted = newToDoList.some((item) => item.completed);
        setSomeTodosRemoved(checkSomeTasksCompleted);
        setTodos(newToDoList);
    };
    const getToDoItems = () => {
        return todos.map((item, index) => {
            return (
                <ToDoItems
                    task={item.task}
                    key={item.id}
                    completed={item.completed}
                    onClickStrikeTodo={() => {
                        markCompletedTodo(item.id)
                    }}
                />
            );

        })
    }

    const emptyTodo = () => {
        setTodos([]);
    }

    return (
        <>
            <div className="to-do">
                <Header/>
                <AddButton addTask={addTask}/>
                {
                    todos.length > 0 ?
                        <ul type="i">{getToDoItems()}</ul> :
                        <h4 className="empty-note">Nothing to do buddy. Sleep!!</h4>
                }
                
                <EmptyButton onEmptyButtonClick={someTodosRemoved ? removeCompletedTasks : emptyTodo}
                             title={someTodosRemoved ? "Remove Completed Tasks" : "Empty Todo"}/>
            </div>
        </>

        //<h4>Nothing to do buddy. Sleep!!</h4>
    );
}
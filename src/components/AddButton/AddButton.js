import './AddButton.css'

export default function AddButton({addTask}){

    const addIntoList=()=>{
        const taskName = document.getElementById("taskInfo");
        const task = taskName.value;
        if(task!==""){
            addTask(task);
            taskName.value="";
        }
        

            console.log(taskName);
    }

    return(
        <>
        <input  id="taskInfo" type="text" placeholder="enter new task" className="input-task"/>
        <button className="addButton" onClick={addIntoList}>Add</button>
        </>
    )
}
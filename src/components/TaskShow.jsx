import { useState } from "react"
import TaskCreate from "./TaskCreate"

function TaskShow({task, onDelete}) {

    const [showEdit, setshowEdit] = useState(false)
    const handleRemove = (event) =>{
        onDelete(task.id)
    }
    const handleUpdate = (event) =>{
        setshowEdit(!showEdit)
    }

    const handleSubmit = (id, title, textarea) =>{
        setshowEdit(false)
        onUpdate(id, task, textarea)
    }

    return ( 
        <div className="taskShow">
            {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>):(
                <div>
                <h3 className="taskH3">Missions</h3>
                <p>{task.title}</p>
                <h3 className="taskH3">To Dos</h3>
                <p>{task.textarea}</p>

                    <div>
                    <button onClick={handleRemove} className="buttonRemove">Remove</button>
                    <button onClick={handleUpdate} className="buttonUpdate">Update</button>
                </div>
                </div>
            )}
        </div>
     );
}

export default TaskShow;
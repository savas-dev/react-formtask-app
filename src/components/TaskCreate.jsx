import { useState } from "react";

function TaskCreate({onCreate, task, form, taskFormUpdate, onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : '')
    const [textarea, setTextarea] = useState(task ? task.textarea : '')

    const handleChange = (event) =>{
        setTitle(event.target.value)    
    }

    const textareaChange = (event) =>{
        setTextarea(event.target.value)
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(taskFormUpdate){
            onUpdate(task.id, task.title, task.textarea)
        }else{
            onCreate(title, textarea)
        }
        
        setTitle('');
        setTextarea('');
    }

    return ( 
        <div>
            {taskFormUpdate ? 
            <div className="taskUpdate">
            <h3>Please enter a task!</h3>
            <form className="taskForm" onSubmit={handleSubmit}>
                <label className="taskLabel">Title</label>
                <input value={title} onChange={handleChange} className="taskInput" />
                <label className="taskLabel">Task</label>
                <textarea value={textarea} onChange={textareaChange} className="textArea" rows={5} />
                <button className="createButton taskButton">Update</button>
            </form>
        </div> : 
        <div className="taskCreate">
        <h3>Please enter a task!</h3>
        <form className="taskForm" onSubmit={handleSubmit}>
            <label className="taskLabel">Title</label>
            <input value={title} onChange={handleChange} className="taskInput" />
            <label className="taskLabel">Task</label>
            <textarea value={textarea} onChange={textareaChange} className="textArea" rows={5} />
            <button className="createButton">Create</button>
        </form>
    </div>    
        }
        </div>
        
     );
}

export default TaskCreate;
import { useState } from "react";

function TaskCreate({onCreate}) {
    const [title, setTitle] = useState('')
    const [textarea, setTextarea] = useState('')

    const handleChange = (event) =>{
        setTitle(event.target.value)    
    }

    const textareaChange = (event) =>{
        setTextarea(event.target.value)
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        onCreate(title, textarea)
        setTitle('');
        setTextarea('');
    }

    return ( 
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
     );
}

export default TaskCreate;
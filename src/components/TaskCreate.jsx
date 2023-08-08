function TaskCreate() {
    return ( 
        <div className="taskCreate">
            <h3>Please enter a task!</h3>
            <form className="taskForm">
                <label className="taskLabel">Title</label>
                <input className="taskInput" />
                <label className="taskLabel">Task</label>
                <textarea className="textArea" rows={5} />
                <button className="createButton">Create</button>
            </form>
        </div>
     );
}

export default TaskCreate;
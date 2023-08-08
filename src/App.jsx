import { useState } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title, textarea) =>{
    const createdTasks = [
      ...tasks,{
        id: Math.round(Math.random() * 999999),
        title: title,
        textarea: textarea
      }
    ];
    setTasks(createdTasks);
  }

  const deleteTaskByID = (id)=>{
    const afterDeletingTasks = tasks.filter((task)=>{
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  }


  const editByTaskID = (id, updateTitle, descTitle) =>{
    const updatedTasks = tasks.map((task) =>{
      if(task.id === id){
        return {id, title, updateTitle, textarea: updatedTaskDesc}
      }
      return task;

    });
    setTasks(updatedTasks)
  }

  return (
   <div className="App">
      <TaskCreate onCreate={createTask} />
      <h2>Görevler</h2>
      <TaskList tasks={tasks} onDelete={deleteTaskByID} onUpdate={{editByTaskID}}/>
   </div>
  );
}

export default App

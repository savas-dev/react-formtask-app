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
    ]
  }

  return (
   <div className="App">
      <TaskCreate onCreate={createTask} />
      <h2>Görevler</h2>
      <TaskList />
   </div>
  );
}

export default App

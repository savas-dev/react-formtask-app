import { useState } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
      <TaskCreate />
      <h2>Görevler</h2>
      <TaskList />
   </div>
  );
}

export default App

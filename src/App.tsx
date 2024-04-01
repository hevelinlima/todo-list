import { useState } from 'react'
import './App.module.css'
import { Header } from './components/Header'
import { TaskBar } from './components/TaskBar'
import { TaskList } from './components/TaskList'


export function App() {

  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask(newTask: string){
    setTasks([...tasks, newTask]);
  }

  return(
    <div>
      <Header/>
      <TaskBar onAddTask={handleAddTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

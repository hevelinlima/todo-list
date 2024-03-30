import './App.module.css'
import { Header } from './components/Header'
import { TaskBar } from './components/TaskBar'
import { TaskList } from './components/TaskList'

export function App() {
  return(
    <div>
      <Header/>
      <TaskBar/>
      <TaskList/>
    </div>
  )
}

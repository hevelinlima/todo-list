import { useEffect, useState } from 'react'
import styles from  './App.module.css'
import { Header } from './components/Header'
import { TaskBar } from './components/TaskBar'
import { TaskList } from './components/TaskList'

export interface Task{
  id: number;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>(()=>{
    const storedTasks = localStorage.getItem('@todo-list:tasks-v1.0');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() =>{
    const stateJSON = JSON.stringify(tasks);
    
    localStorage.setItem('@todo-list:tasks-v1.0', stateJSON);
  }, [tasks])

  function handleAddTask(newTask: string){
    const newTaskWithID: Task = {
      id: new Date().getTime(),
      content: newTask,
      isChecked: false
    };
    setTasks([...tasks, newTaskWithID]);
  }

  function handleToggleTask({id, value}: {id: number, value: boolean}){
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          isChecked: value
        };
      }
      return {...task}
    })
    setTasks(updatedTasks);
  }

  return(
    <div className={styles.container}>
      <Header/>
      <TaskBar onAddTask={handleAddTask}/>
      <div className={styles.wrapper}>
        <TaskList 
          tasks={tasks} 
          setTasks={setTasks}
          onToggleTask={handleToggleTask}
        />
      </div>
    </div>
  )
}

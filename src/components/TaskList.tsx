import styles from './TaskList.module.css'
import { Tasks } from './List/Tasks';
import { Empty } from './List/Empty';

interface TaskListProps{
  tasks: string[];
  setTasks: (task: string[]) => void;
}

export function TaskList({tasks, setTasks}: TaskListProps){

  function deleteTask(taskToDelete: string){
    const tasksWithOutDeletedOne = tasks.filter(task =>{
      return task !== taskToDelete
    })
    setTasks(tasksWithOutDeletedOne);
  }

  return(
    <article className={styles.tasksArticle}>
      <header>
        <div className={styles.tasksHeader}>
          <h3>Tarefas criadas</h3>
          <p>0</p>
        </div>
        <div className={styles.tasksHeader}> 
          <h3><span>Concluídas</span></h3>
          <p>0</p>
        </div>
      </header>
      <div className={styles.tasksMain}>
        {tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Tasks
              content={task}
              onDeleteTask={deleteTask}/>
              )
          })
          ) : (
          <Empty />
          )}
      </div>
    </article>
  );
}
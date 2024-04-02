import styles from './TaskList.module.css'
import { Tasks } from './List/Tasks';
import { Empty } from './List/Empty';

interface TaskListProps{
  tasks: string[];
}

export function TaskList({tasks}: TaskListProps){
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
      <div>
        {tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Tasks
              content={task}/>
              )
          })
          ) : (
          <Empty />
          )}
      </div>
    </article>
  );
}
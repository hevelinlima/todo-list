import styles from './TaskList.module.css'
import { Tasks } from './List/Tasks';

export function TaskList(){
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
      <Tasks />
      <Tasks />
    </article>
  );
}
import styles from './TaskList.module.css'
import clipboard from '../assets/clipboard.svg'

export function TaskList(){
  return(
    <article className={styles.tasks}>
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
      <div className={styles.tasksGap} />
      <div className={styles.tasksMain}>
        <img src={ clipboard } alt="" />
        <h4>Você ainda não tem tarefas cadastradas.</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </article>
  );
}
import styles from './Empty.module.css'
import clipboard from '../../assets/clipboard.svg'

export function Empty(){
  return(
    <main>
      <div className={styles.tasksGap} />
      <div className={styles.tasksMain}>
        <img src={ clipboard } alt="" />
        <h4>Você ainda não tem tarefas cadastradas.</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
  )
}
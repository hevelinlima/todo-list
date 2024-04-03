import { Check, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'

interface TasksProps{
  content: string;
  onDeleteTask: (task: string) => void; 
}

export function Tasks({content, onDeleteTask}: TasksProps){

  function handleDeleteTask(){
    onDeleteTask(content)
  }

  return(
    <div className={styles.task}>
      <div className={styles.container}>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}>
            <Check />
          </span>
        </label>
        <p className={styles.taskText}>
          {content}
        </p>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
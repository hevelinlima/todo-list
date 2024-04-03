import { Check, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'

interface TasksProps{
  id: string;
  content: string;
  onDeleteTask: (taskToDelete: string) => void; 
}

export function Tasks({id, content, onDeleteTask}: TasksProps){

  function handleDeleteTask(){
    onDeleteTask(id)
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
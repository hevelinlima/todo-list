import { Check, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'

interface TasksProps{
  content: string;
}

export function Tasks({content}: TasksProps){
  return(
    <div className={styles.task}>
      <div className={styles.container}>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" name="" id="" />
          <span>
            <Check />
          </span>
        </label>
        <p className={styles.taskText}>
          {content}
        </p>
        <button title="Deletar tarefa">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
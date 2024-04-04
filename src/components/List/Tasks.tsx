import { Check, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'
import { ITask } from "../../App";

interface TasksProps{
  data: ITask;
  onDeleteTask: (taskToDelete: number) => void; 
  onToggleTask: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Tasks({data, onDeleteTask, onToggleTask}: TasksProps){

  function handleDeleteTask(){
    onDeleteTask(data.id)
  }

  function handleToggleTask(){
    onToggleTask({ id: data.id, value: !data.isChecked })
  }

  const checkedChexbox = data.isChecked 
  ? styles['checked-chexbox']
  : styles['unchecked-chexbox']

  const checkedParagraph = data.isChecked 
  ? styles['checked-taskText']
  : ''

  return(
    <div className={styles.task}>
      <div className={styles.container}>
        <label htmlFor="checkbox" onClick={handleToggleTask}>
          <input readOnly type="checkbox" checked={data.isChecked}/>
          <span className={`${styles.checkbox} ${checkedChexbox}`}>
            {data.isChecked && <Check />}
          </span>
        </label>
        <p className={`${styles.taskText} ${checkedParagraph}`}>
          {data.content}
        </p>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
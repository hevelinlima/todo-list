import { Check, Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css'

export function Tasks(){
  return(
    <div className={styles.task}>
      <div className={styles.container}>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" name="" id="" />
          <span>
            <Check />
          </span>
        </label>
        <p className={styles.taskText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet amet, aliquid exercitationem inventore saepe quam odit cumque quibusdam consequuntur. A?</p>
        <button title="Deletar tarefa">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
import styles from './TaskBar.module.css'
import { PlusCircle } from '@phosphor-icons/react';

export function TaskBar(){
  return(
    <div className={styles.taskbar}>
      <form className={styles.taskbarForm} action="">
        <textarea name="" id="" placeholder="Adicione uma nova tarefa"></textarea>
        <div>
          <button type="submit">
            Criar
            <PlusCircle size={22} />
          </button>
        </div>
      </form>
    </div>
  );
}
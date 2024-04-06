import { FormEvent, useState } from 'react';
import styles from './TaskBar.module.css';
import { PlusCircle } from '@phosphor-icons/react';

interface TaskBarProps{
  onAddTask: (task: string) => void;
}

export function TaskBar({ onAddTask }: TaskBarProps){
  const [taskText, setTaskText] = useState('');

  function taskChange(event: FormEvent<HTMLTextAreaElement>){
    setTaskText(event.currentTarget.value);
  }

  function handleSubmitText(event: FormEvent){
    event.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  }

  return(
    <div className={styles.taskbar}>
      <form onSubmit={handleSubmitText} className={styles.taskbarForm} >
        <textarea 
          value={taskText} 
          onChange={taskChange}
          placeholder="Adicione uma nova tarefa">  
        </textarea>
        <div>
          <button type="submit">
            <p>Criar</p>
            <span><PlusCircle size={22} /></span>
          </button>
        </div>
      </form>
    </div>
  );
}
import styles from './TaskList.module.css'
import { Tasks } from './List/Tasks';
import { Empty } from './List/Empty';
import { ITask } from '../App';

interface TaskListProps{
  tasks: ITask[];
  setTasks: (task: ITask[]) => void;
  onToggleTask: ({ id, value }: { id: number; value: boolean }) => void;
}

export function TaskList({tasks, setTasks, onToggleTask}: TaskListProps){

  function deleteTask(taskToDelete: number){
    const tasksWithOutDeletedOne = tasks.filter(task =>{
      return task.id !== taskToDelete
    })
    setTasks(tasksWithOutDeletedOne);
  }

  return(
    <article className={styles.tasksArticle}>
      <header>
        <div className={styles.tasksHeader}>
          <h3>Tarefas criadas</h3>
          <p>{tasks.length}</p>
        </div>
        <div className={styles.tasksHeader}> 
          <h3><span>Concluídas</span></h3>
          {tasks.length == 0 ? (
            <p>0</p>
          ) : (
            <p>0 de {tasks.length}</p>
          )}
        </div>
      </header>
      <div className={styles.tasksMain}>
        {tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Tasks
              key={task.id}
              data={task}
              onDeleteTask={deleteTask}
              onToggleTask={onToggleTask}/>
              )
          })
          ) : (
          <Empty />
          )}
      </div>
    </article>
  );
}
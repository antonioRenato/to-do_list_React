import { Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
  task: {
    content: string;
    isFinished: boolean;
  };
  onDelete: (contentToDelete: string) => void;
}

export function Task(props: TaskProps) {
  function handleDelete() {
    props.onDelete(props.task.content);
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name={`task-${props.task.content}`} value={props.task.content} />
      <label>{` `}{props.task.content}</label>
      <button className={styles.trash} onClick={handleDelete}>
        <Trash size={24}/>
      </button>
      
    </div>
  )
}
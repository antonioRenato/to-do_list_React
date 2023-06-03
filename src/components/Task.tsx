import { Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
  taskObj: {
    content: string;
    isFinished: boolean;
  };
  onDelete: (contentToDelete: string) => void;
}

export function Task(props: TaskProps) {
  function handleDelete() {
    props.onDelete(props.taskObj.content);
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name={`task-${props.taskObj.content}`} value={props.taskObj.content} />
      <label>{` `}{props.taskObj.content}</label>
      <button className={styles.trash} onClick={handleDelete}>
        <Trash size={24}/>
      </button>
      
    </div>
  )
}
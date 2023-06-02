import { Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
  id: number;
  content: string;
  isFinished: boolean;
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={`task-${props.id}`} name={`task-${props.id}`} value={props.content} />
      <label htmlFor={`task-${props.id}`}>{` `}{props.content}</label>
      <button className={styles.trash}>
        <Trash size={24} color="var(--gray-300)"/>
      </button>
      
    </div>
  )
}
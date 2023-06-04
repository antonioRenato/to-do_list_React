import { Trash } from "phosphor-react";
import styles from './Task.module.css'
import { useRef } from "react";

interface TaskProps {
  taskObj: {
    content: string;
    isFinished: boolean;
  };
  onDelete: (contentToDelete: string) => void;
  onToggleFinish: (content: string, isFinished: boolean) => void;
}

export function Task(props: TaskProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  function handleDelete() {
    props.onDelete(props.taskObj.content);
  }

  function handleToggleFinish(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    props.onToggleFinish(props.taskObj.content, isChecked);
  }

  function handleLabelClick() {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
      props.onToggleFinish(
        props.taskObj.content,
        checkboxRef.current.checked
      );
    }
  }

  return (
    <div className={styles.container}>
      <input ref={checkboxRef} type="checkbox" name={`task-${props.taskObj.content}`} value={props.taskObj.content} onChange={handleToggleFinish}/>
      <label className={styles.contLabel} onClick={handleLabelClick}>{` `}{props.taskObj.content}</label>
      <button className={styles.trash} onClick={handleDelete}>
        <Trash size={24}/>
      </button>
      
    </div>
  )
}
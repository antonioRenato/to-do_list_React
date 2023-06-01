import { Trash } from "phosphor-react";
import styles from './Task.module.css'

export function Task () {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="task" name="task" value="content" />
      <label>{` `}Integer urna interdum massa libero auctor neque Integer urna interdum massa libero auctor neque.</label>
      <button className={styles.trash}>
        <Trash size={24} color="var(--gray-300)"/>
      </button>
      
    </div>
  )
}
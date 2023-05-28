import { ClipboardText } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <>
      <div className={styles.container}>
        <span>Tarefas criadas<div>0</div></span>
      
        <span>Concluídas<div>0</div></span>      
      </div>
      <div className={styles.content}>
        <ClipboardText size={82} color="#333333"/>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  )
}
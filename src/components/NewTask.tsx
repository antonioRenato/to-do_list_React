import { ClipboardText, PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { Task } from './Task'

export function NewTask() {
  return (
    <>
    <div className={styles.newTask}>
      <input type="text" placeholder=" Adicione uma nova tarefa"/>
      <button type="submit">
        Criar 
        <PlusCircle size={28} />
      </button>
    </div>

    <div className={styles.container}>
        <span>Tarefas criadas<div>0</div></span>
      
        <span>Concluídas<div>0</div></span>      
      </div>
      <div className={styles.content}>
        <ClipboardText size={82} color="#333333"/>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      <Task />
      <Task />
      <Task />
    </>
  )
}
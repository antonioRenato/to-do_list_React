import { ClipboardText, PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { Task } from './Task'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: number;
  content: string;
  isFinished: boolean;
}

export function NewTask() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleNewTask () {
    event?.preventDefault()

    const newTasks: Task = {
      id: tasks.length + 1,
      content: 'Nova Tarefa',
      isFinished: true,
    };

    // Atualize o estado das tarefas adicionando a nova tarefa ao array existente
    setTasks([...tasks, newTasks]);
  }

  return (
    <>
    <div className={styles.newTask}>
      <input type="text" placeholder=" Adicione uma nova tarefa"/>
      <button type="button" onClick={handleNewTask}>
        Criar 
        <PlusCircle size={28} />
      </button>
    </div>

    <div className={styles.container}>
      <span>Tarefas criadas<div>{tasks.length}</div></span>
      
      <span>Concluídas<div>0</div></span>      
    </div>

    {tasks.length ? (
        <div>
          {tasks.map(task => (
            <Task key={uuidv4()} id={uuidv4()} content="nova tarefa" isFinished={true} />
          ))}
        </div>
    ) : (
      <div className={styles.content}>
        <ClipboardText size={82} color="var(--gray-400)" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )}

    </>
  )
}
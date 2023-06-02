import { ClipboardText, PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { Task } from './Task'
import { useState } from 'react'

interface Task {
  content: string;
  isFinished: boolean;
}

export function NewTask() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  function handleNewTask () {

    const newTasks: Task = {
      content: newTask,
      isFinished: false,
    };

    // Atualize o estado das tarefas adicionando a nova tarefa ao array existente
    setTasks([...tasks, newTasks]);
    setNewTask("")
  }

  function handleNewTaskChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleNewTask();
    }
  }

  function handleDeleteTask(contentToDelete : string) {
    setTasks(tasks.filter(task => task.content !==  contentToDelete))
  }

  return (
    <>
    <div className={styles.newTask}>
      <input type="text" placeholder="  Adicione uma nova tarefa..." name="content" onChange={handleNewTaskChanged} onKeyDown={handleKeyDown}/>
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
            <Task key={task.content} content={task.content} isFinished={task.isFinished} onDelete={handleDeleteTask} />
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
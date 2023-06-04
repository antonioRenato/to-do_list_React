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
  const [isValid, setIsValid] = useState(false);

  function handleNewTask () {
    if (newTask.trim() === "" || tasks.some(task => task.content === newTask)) {
      setIsValid(false);
      return;
    }

    const newTasks: Task = {
      content: newTask,
      isFinished: false,
    };

    // Atualize o estado das tarefas adicionando a nova tarefa ao array existente
    setTasks([...tasks, newTasks])
    setNewTask("")
    setIsValid(true);
  }

  function handleNewTaskChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    
    setNewTask(value)
    setIsValid(/^[a-zA-Z]+$/.test(value));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && isValid) {
      handleNewTask();
      setNewTask("");
    }
  }

  function handleDeleteTask(contentToDelete : string) {
    setTasks(tasks.filter(task => task.content !== contentToDelete))
  }

  function totalTaskDone(): number {
    return tasks.filter(task => task.isFinished).length;
  }

  function handleMarkedDownTask(content: string, isFinished: boolean) {
    setTasks(tasks.map(task => 
      task.content === content ? {...task, isFinished } : task  
    ))
  }  

  return (
    <>
    <div className={styles.newTask}>
        <input 
          type="text" 
          placeholder="  Adicione uma nova tarefa..." 
          name="content" 
          onChange={handleNewTaskChanged} 
          onKeyDown={handleKeyDown} 
          value={newTask}
        />
       
        <button 
          type="button" 
          onClick={() => {
            handleNewTask();
            setNewTask("");
          }} 
          disabled={!isValid}
        >
        Criar 
        <PlusCircle size={28} />
      </button>
    </div>

    <div>
        {!isValid && tasks.length > 0 && (
          <p className={styles.validationMessage}>
            A tarefa não pode ser repetida nem estar vazia.
          </p>
        )}
    </div>

    <div className={styles.container}>
      <span>Tarefas criadas<div>{tasks.length}</div></span>
      
      <span>Concluídas<div>{totalTaskDone()} de {tasks.length}</div></span>      
    </div>

    {tasks.length ? (
        <div>
          {tasks.map(task => (
            <Task 
              key={task.content} 
              taskObj={{ content: task.content , isFinished: task.isFinished }} 
              onDelete={handleDeleteTask} 
              onToggleFinish={handleMarkedDownTask}
            />
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
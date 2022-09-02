import './global.css';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Check, PlusCircle, Trash } from 'phosphor-react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import styles from './App.module.css';

interface taskListProps {
  title: string;
  completed: boolean;
}

const taskList = [
  {
    title: 'Estudar React JS',
    completed: false,
  },
];

export function App() {
  const [taskText, setTaskText] = useState('');
  const [newTaskList, setNewTaskList] = useState<taskListProps[]>(taskList)
  const [completedTaskLength, setCompletedTaskLength] = useState(0);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>): void {
    setTaskText(event.target.value);
  }

  function handleAddTaskToTodoList(event: FormEvent) {
    event.preventDefault();
    setNewTaskList([...newTaskList, {
      title: taskText,
      completed: false,
    }])
    setTaskText('');
  }

  function deleteTask(taskToDelete: string, isCompleted: boolean) {
    if(isCompleted === false) {
      return alert('Complete a tarefa para excluir')
    }
    const tasksWithoutDeletedOne = newTaskList.filter(task => {
      return task.title !== taskToDelete;
    })
    const completedLength = tasksWithoutDeletedOne.filter(task => {
      return task.completed === true
    })
    setNewTaskList(tasksWithoutDeletedOne);
    setCompletedTaskLength(completedLength.length);
  }

  function completedTask(taskTitleCompleted: string, isCompleted: boolean) {
    newTaskList.filter((task, index) => {
      if(task.title === taskTitleCompleted) {
        task.completed = isCompleted;
        return newTaskList.indexOf(task, index)
      }
    })
    setNewTaskList(newTaskList);
    const completedLength = newTaskList.filter(task => {
      return task.completed === true;
    })
    setCompletedTaskLength(completedLength.length);
  }

  const isNewTaskEmpty = taskText.length === 0;
  
  return(
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.addTodoWrapper} onSubmit={handleAddTaskToTodoList}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={taskText}
            onChange={handleNewTaskChange}
            required
          />
          <button 
            type="submit"
            disabled={isNewTaskEmpty}
          >
            Criar <PlusCircle size={16}/>
          </button>
        </form>
        <main className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <p>
              Tarefas criadas
              <span>{newTaskList.length}</span>
            </p>
            
            <p>
              Concluídas
              <span>
                {completedTaskLength} de {newTaskList.length}
              </span>
            </p>
          </div>
          {newTaskList.map((task) => {
            return(
              <Tasks 
                key={task.title} 
                title={task.title}
                completed={task.completed}
                onDeleteTask={deleteTask}
                onCompleteTask={completedTask}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
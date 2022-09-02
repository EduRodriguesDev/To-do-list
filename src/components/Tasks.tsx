import { Check, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import styles from './Tasks.module.css';

interface TasksProps {
  title: string;
  completed: boolean;
  onDeleteTask: (task: string, completed: boolean) => void;
  onCompleteTask: (task: string, isCompleted: boolean) => void;
}

export function Tasks({ 
  title, 
  completed, 
  onDeleteTask,
   onCompleteTask, 
}: TasksProps) {
  const [isCompleted, setIsCompleted] = useState(completed);
  
  useEffect(() => {
    onCompleteTask(title, isCompleted);
  }, [isCompleted])

  function handleDeleteTask() {
    onDeleteTask(title, isCompleted);
  }

  function handleCompletedTask() {
    setIsCompleted((state) => {
      return !state
    })
  }
  
  return (
    <div className={styles.tasksList}>
      <label className={styles.checkbox}>
        <input type="checkbox" defaultChecked={isCompleted} onClick={handleCompletedTask} />
        <span className={styles.checkboxPersonalized}>
          <Check />
        </span>
        <p className={styles.taskTitle}>
          {title}
        </p>
      </label>
      <button className={styles.deleteTask} onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
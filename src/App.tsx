import './global.css';

import { Check, PlusCircle, Trash } from 'phosphor-react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import styles from './App.module.css';

function App() {
  return(
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.addTodoWrapper}>
          <input placeholder="Adicione uma nova tarefa" type="text" />
          <button type="submit">Criar <PlusCircle size={16}/></button>
        </form>
        <main className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <p>
              Tarefas criadas
              <span>5</span>
            </p>
            
            <p>
              Concluídas
              <span>
                2 de 5
              </span>
            </p>
          </div>
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          
        </main>
      </div>
    </>
  )
}

export default App

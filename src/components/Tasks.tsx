import { Check, Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasksList}>
      <label className={styles.checkbox}>
        <input type="checkbox" />
        <span className={styles.checkboxPersonalized}>
          <Check />
        </span>
        <p className={styles.taskTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </label>
      <button className={styles.deleteTask}>
        <Trash />
      </button>
    </div>
  );
}

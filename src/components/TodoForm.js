import { useState } from 'react';
import styles from './todoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  console.log(text);
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <input
          className={styles.from}
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter new todo'
        />
        <button className={styles.button} type='submit'>
          Submit
        </button>
      </label>
    </form>
  );
}

export default TodoForm;

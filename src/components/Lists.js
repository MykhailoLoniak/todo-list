import { useState } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import styles from './lists.module.css';

function Lists() {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = (text) => {
    if (text == '') return;
    setTodo([...todo, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodo(todo.filter((_, idx) => idx !== index));
    console.log('del');
  };

  console.log(todo);

  return (
    <div className={styles.conteiner}>
      <TodoForm addTodo={addTodoHandler} />
      {todo.map((e, index) => (
        <List
          key={e}
          e={e}
          index={index}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </div>
  );
}

export default Lists;

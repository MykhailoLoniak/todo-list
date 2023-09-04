import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import styles from './list.module.css';

function List({ e, deleteTodoHandler, index }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    console.log('click');
  };

  return (
    <div className={`${styles.list} ${isClicked ? styles.clicked : ''}`}>
      <span>{index + 1} </span>
      <p>{e}</p>
      <div className={styles.control}>
        <TiTick className={styles.img} onClick={handleButtonClick} />
        <MdDelete
          className={styles.img}
          onClick={() => deleteTodoHandler(index)}
        />
      </div>
    </div>
  );
}

export default List;

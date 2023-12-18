import React from 'react';
import styles from './FilmItem.module.css';

function FilmItem() {
  return (
    <li className={styles.item}>
        <div className={styles.image}>
            <img src=""></img>
        </div>
        <div className={styles.content}>
            <h3>Title</h3>
            <p>Year</p>
            <p>Description</p>
        </div>
        <div className={styles.actions}>
            <button>Add to Favourites</button>
        </div>

    </li>
  )
}

export default FilmItem
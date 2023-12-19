import React from 'react';
import styles from './FilmItem.module.css';
import Card from './Card';

function FilmItem(props) {
  return (
    <Card>
    <li className={styles.item}>
        <div className={styles.image}>
            <img src={props.oneFilm.image}></img>
        </div>
        <div className={styles.content}>
            <h3>{ props.oneFilm.title} </h3>
            <p> { props.oneFilm.year} </p>
            <p> { props.oneFilm.description}</p>
        </div>
        <div className={styles.actions}>
            <button>Add to Favourites</button>
        </div>

    </li>

    </Card>
  )
}

export default FilmItem
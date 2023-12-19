import React, { useContext } from 'react';
import styles from './FilmItem.module.css';
import Card from './Card';
import FavContext from '../store/FavouritesContext';

function FilmItem(props) {
  const favCtx = useContext(FavContext);
  function favouriteHandler() {
    if(favCtx.isFavourite(props.oneFilm.id))
       favCtx.removeFavourite(props.oneFilm);
      else
      favCtx.addFavourite(props.oneFilm);
  }
  let isFav = favCtx.isFavourite(props.oneFilm.id);
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
            <button onClick={favouriteHandler}>{isFav ? 'Remove From Favourites' : 'Add to Favourites'}</button>
        </div>

    </li>

    </Card>
  )
}

export default FilmItem
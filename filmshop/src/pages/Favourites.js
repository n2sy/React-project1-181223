import React, { useContext } from 'react'
import FavContext from '../store/FavouritesContext'
import FilmList from '../components/FilmList';

function Favourites() {
  const favCtx = useContext(FavContext); 
  console.log(favCtx.favourites);
  
  if(favCtx.totalFav == 0)
  return <h3>You don't have favourites yet !</h3>
  else
  return (
    <div>
      <FilmList listFilms={favCtx.favourites}></FilmList>
    </div>
  )
}

export default Favourites
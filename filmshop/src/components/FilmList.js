import React from 'react'
import FilmItem from './FilmItem'

function FilmList(props) {
  return (
    <ol>
        {
            props.listFilms.map( (film) => {
                return  <FilmItem key={film.id} oneFilm={film}></FilmItem>

            })
        }
    </ol>
  )
}

export default FilmList
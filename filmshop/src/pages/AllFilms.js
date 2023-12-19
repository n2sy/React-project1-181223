import React from 'react'
import FilmList from '../components/FilmList'

function AllFilms(props) {
  return (
    <div>
        <FilmList listFilms={props.listFilms}></FilmList>
    </div>
  )
}

export default AllFilms
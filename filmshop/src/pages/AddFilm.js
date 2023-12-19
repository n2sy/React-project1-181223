import React from 'react'
import FilmFormNonCtrl from '../components/FilmFormNonCtrl'

function AddFilm(props) {
  return (
    <div><FilmFormNonCtrl addFilm={props.addFilm}></FilmFormNonCtrl></div>
  )
}

export default AddFilm
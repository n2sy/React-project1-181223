import React, { useEffect, useState } from 'react'
import FilmItem from './FilmItem'

function FilmList(props) {
  const [tabAllFilms, setTabAllFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setIsLoading(false)
      for (const k in data) {
        setTabAllFilms(prev => {
          return [...prev, 
          {
            id : k,
            ...data[k]
          }]
        })
        }
      }
        );
  }, [])
  
  if(isLoading) 
    return <h3>Data is loading...</h3>
  else
  return (
    <ol>
        {
            tabAllFilms.map( (film) => {
                return  <FilmItem key={film.id} oneFilm={film}></FilmItem>

            })
        }
    </ol>
  )
}

export default FilmList
import React, { useEffect, useState } from 'react'
import FilmList from '../components/FilmList'

function AllFilms(props) {
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
    <div>
        <FilmList listFilms={tabAllFilms}></FilmList>
    </div>
  )
}

export default AllFilms
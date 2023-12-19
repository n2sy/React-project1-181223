import React, { useRef } from "react";
import styles from "./FilmFormCtrl.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import confetti from 'canvas-confetti';

function FilmFormNonCtrl(props) {
  let navigate = useNavigate();
  let titleRef = useRef();
  let imageRef = useRef();
  let descRef = useRef();
  let yearRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    axios.post(
      "https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json",
      {
        title: titleRef.current.value,
        image: imageRef.current.value,
        year: yearRef.current.value,
        description: descRef.current.value,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((response) => {
        console.log(response);
        confetti();
        navigate('/all', {replace : true})
    })

    // fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json',
    // {
    //     method : 'POST',
    //     body : JSON.stringify({
    //         title : titleRef.current.value,
    //         image : imageRef.current.value,
    //         year : yearRef.current.value,
    //         description : descRef.current.value
    //     }),
    //     headers : {
    //         'content-type' : 'application/json'
    //     }
    // }).then(response => {
    //     navigate('/all', {replace : true})

    // } )
    // .catch(err => {
    //     console.log(err);
    // })

    props.addFilm({
      title: titleRef.current.value,
      image: imageRef.current.value,
      year: yearRef.current.value,
      description: descRef.current.value,
    });
    //navigate('/all', {replace : true})
    // navigate('/all', {replace : true})
    //navigate(-1)
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} name="title"></input>
        <label>Year</label>
        <input type="number" ref={yearRef} name="year"></input>
        <label>Image</label>
        <input type="url" ref={imageRef} name="image"></input>
        <label>Description</label>
        <textarea cols="5" rows="5" ref={descRef} name="description"></textarea>
      </div>
      <div className={styles.actions}>
        <button type="submit">Add Film</button>
      </div>
    </form>
  );
}

export default FilmFormNonCtrl;

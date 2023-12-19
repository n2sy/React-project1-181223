import React, { useState } from 'react';
import styles from './FilmFormCtrl.module.css';
import { useNavigate } from 'react-router-dom';


function FilmFormCtrl(props) {
    let navigate = useNavigate();
    const [nFilm, setnFilm] = useState({
        title : '',
        year : '',
        descritpion : '',
        image:''
    })

    // function descHandler(e) {
    //     setnFilm((prev) => {
    //         return {
    //             ...prev,
    //             descritpion : e.target.value
    //         }
    //     });
    //     console.log(nFilm);
    // }
    // function titleHandler(e) {
    //      setnFilm((prev) => {
    //         return {
    //             ...prev,
    //             title : e.target.value
    //         }
    //     });
    //     console.log(nFilm);

    // }
    // function yearHandler(e) {
    //      setnFilm((prev) => {
    //         return {
    //             ...prev,
    //             year : e.target.value
    //         }
    //     });
    //     console.log(nFilm);

    // }
    // function imageHandler(e) {
    //      setnFilm((prev) => {
    //         return {
    //             ...prev,
    //             image : e.target.value
    //         }
    //     });
    //     console.log(nFilm);

    // }
    function formHandler(e) {
        const {name, value } = e.target;
        console.log(e.target.name, e.target.value);
            setnFilm((prev) => {
                prev[name] = value
            return prev;
        });
        console.log(nFilm);

        }

    function submitHandler(e) {
        e.preventDefault();
        props.addFilm(nFilm);
        //navigate('/all', {replace : true})
        // navigate('/all', {replace : true})
        //navigate(-1)
    }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={formHandler} name="title" ></input>
            <label>Year</label>
            <input type="number" onChange={formHandler} name="year"></input>
            <label>Image</label>
            <input type="url" onChange={formHandler} name="image"></input>
            <label>Description</label>
            <textarea cols="5" rows="5" onChange={formHandler} name="description"></textarea>
        </div>
        <div className={styles.actions}>
            <button type="submit">Add Film</button>
        </div>


    </form>
    
  )
}

export default FilmFormCtrl
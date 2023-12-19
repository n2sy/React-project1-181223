import React from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    let s = {
        'textDecoration' : 'underline'
    }
    let s1 = {
        'textDecoration' : 'overline'
    }
  return (
    <header className={styles.header}>
        <div className={styles.logo}>FilmShop</div>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><NavLink to="/all">
                    {({isActive}) => {
                        return(
                            <span className={isActive ? "active" : "inactive"}>All Films</span>
                        )
                    }
                    }
                    </NavLink></li>
                <li><Link to="/add">Add Film</Link></li>
                <li><NavLink style={({isActive}) => isActive ? s : s1} to="/favourites">Favourites</NavLink></li>
            </ul>
        </nav>


    </header>
  )
}

export default Navbar
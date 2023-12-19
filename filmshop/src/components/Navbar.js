import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import FavContext from '../store/FavouritesContext';

function Navbar() {
    let s = {
        'textDecoration' : 'underline'
    }
    let s1 = {
        'textDecoration' : 'overline'
    }
    let favCtx = useContext(FavContext);
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
                <li><NavLink style={({isActive}) => isActive ? s : s1} to="/favourites">Favourites <span class="badge bg-secondary">{ favCtx.totalFav}</span></NavLink></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
        </nav>


    </header>
  )
}

export default Navbar
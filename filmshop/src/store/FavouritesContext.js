import { createContext, useState } from "react";


const FavContext = createContext(
    {
        favourites : [],
        totalFav : 0,
        addFavourite : () => { },
        removeFavourite : () => { },
        isFavourite : () => { }
    }
);

export function FavouriteContexteProvider(props) {
    const [tabFav, setTabFav] = useState([]);

    function ajouterFavori(film) {
        setTabFav((prev) => {
            return [...prev, film];
        })
    }
    function supprimerFavori(film) {
        setTabFav((prev) => {
            let i = prev.indexOf(film);
            //prev.findIndex(f => f.id == id);
            prev.splice(i ,1);
            return [...prev]
        })
    }
    function estFavourite(id) {
        if(tabFav.find(f => f.id == id))
            return true;
        return false;
        //tabFav.some()
    }

    const c = {
        favourites : tabFav,
        totalFav : tabFav.length,
        addFavourite : ajouterFavori,
        removeFavourite : supprimerFavori,
        isFavourite : estFavourite
    }

    return <FavContext.Provider value={c}>
        { props.children}
    </FavContext.Provider>
}

export default FavContext;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import AllFilms from './pages/AllFilms';
import AddFilm from './pages/AddFilm';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';

function App() {
  const tabFilms = [
    {
      id : 1,
      title : "Inception",
      year : 2010,
      description : "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable.",
      image : 'https://imgsrc.cineserie.com/2020/08/inception-lundi-17-aout-sur-tmc-retour-sur-la-conception-dune-scene-cle-tournee-a-paris.jpg?ver=1'
    },
    {
      id : 2,
      title : "Heat",
      year : 1995,
      description : "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations. Cependant, ce dernier tue froidement l'un des convoyeurs et Chris Shiherlis se retrouve obligé de terminer le travail.",
      image : 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/029/heat-photo-1029907.jpg'
    }
  ]
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Accueil></Accueil>}></Route>
      <Route path='/all' element={<AllFilms listFilms={tabFilms}></AllFilms>}></Route>
      <Route path='/add' element={<AddFilm></AddFilm>}></Route>
      <Route path='/favourites' element={<Favourites></Favourites>}></Route>
    </Routes>
    </>
  );
}

export default App;

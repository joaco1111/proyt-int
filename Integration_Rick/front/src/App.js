import { useState } from 'react';
import style from './App.css';
import onClose from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
//import Card from './components/Card/Card.jsx';
//import data from './data';

function App() {
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   const [characters, setCharacters] = useState([]);
   const onSearch = () => {
      setCharacters([...characters, example])
      // } else {
      //    window.alert('Porfavor revise el ID ingresado');
      }
  return (
      <div>
      <div className='App'>
         <div className={style.NavBar}>
         <NavBar onSearch={onSearch} />
         </div>
         <div>
         <Cards characters={characters} onClose={onClose} />
         </div>
         </div>
         {/* <Cards
         id={characters.id}
         name={characters.name}
         status={characters.status}
         species={characters.species}
         gender={characters.gender}
         origin={characters.origin.name}
         image={characters.image}
         onClose={() => window.alert('Estas seguro que quieres borrar el personaje?')}/> */}
         </div>
   )
   }
   
  


export default App;

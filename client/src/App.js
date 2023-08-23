import style from './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import Card from './components/Card/Card.jsx';


function App() {

   const [characters, setCharacters] = useState([]);
   const [info, setInfo] = useState({});
   const url = "https://rickandmortyapi.com/api/character";

   const fetchCharacters = (url) => {
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            setCharacters(data.results);
            setInfo(data.info);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleNextPage = () => {
      fetchCharacters(info.next);
      window.scrollTo(0, 0);
   };

   const handlePreviousPage = () => {
      fetchCharacters(info.prev);
      window.scrollTo(0, 0);
   };

   useEffect(() => {
      fetchCharacters(url);
   }, []);

   
   return (
      <div className="App">
         <div className={style.nav}>
      <Navbar className={style.titel} brand="Rick and Morty App" >

      <nav class="navbar navbar-dark bg-dark">
  
</nav>

<nav class="navbar navbar-dark bg-primary">
  
</nav>

<nav class="navbar navbar-light">
  
</nav>
       </Navbar>
        </div>
      <div className="container py-5">
        <div>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  {'<-'}
                  </button>
                  </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                {'->'}
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
              
      <Card characters={characters} />

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  {'<-'}
                  </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                {'->'}
                  </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </div>
  );
}




export default App;

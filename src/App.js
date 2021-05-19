import React, { useState, useEffect } from "react";
import './App.css';
import CharacterCard from "./CharacterCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        console.log(data)



      })


  }, [])


  return (

    <div className="App">
      <h1 className="title"> Star Wars Catalog</h1>
      <div className="container" >
        {characters.map(character =>
          <CharacterCard name={character.name}
            height={character.height}
            birth_year={character.birth_year}
            films={character.films.length} >
          </CharacterCard>)}
      </div>
      <div className="btn-place">
        <button className="btn">Load More_</button>
      </div>
    </div >
  )
}


export default App;

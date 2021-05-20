import React, { useState, useEffect } from "react"
import CharacterCard from "../CharacterCard"

function MainContent() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        console.log(data)



      })


  }, []);

  function getSimilar(event) {
    console.log(event)
    fetch(
      `https://swapi.dev/api/people/?page=2`
    )
      .then((response) => response.json())

      .then((data) => { setCharacters(data.results) })

  }

  return (

    <div className="App">
      <h1 className="title"> Star Wars Catalog</h1>
      <div className="container" >
        {characters.map(character =>
          <CharacterCard name={character.name}
            height={character.height}
            birth_year={character.birth_year}
            films={character.films.length}

          >
          </CharacterCard>)}
      </div>
      <div className="btn-place">
        <button className="btn" onClick={getSimilar}>Load More_</button>
      </div>
    </div >
  )
}
export default MainContent
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CharacterCard from "../CharacterCard";
import Image from "./Pictures/star-wars-characters.jpg";

function MainContent() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((characters) => [...characters, ...data.results]);

        console.log(data);

        setNextUrl(data.next);
      });
  }, []);

  function getCharacter(event) {
    console.log(event);
    fetch(`https://swapi.dev/api/people/?search=${search}`)
      .then((response) => response.json())

      .then((data) => {
        setCharacters(data.results);
      });
  }

  function getMore(event) {
    console.log(event);
    fetch(nextUrl)
      .then((response) => response.json())

      .then((data) => {
        setCharacters([...characters, ...data.results]);
        setNextUrl(data.next);
      });
  }

  return (
    <div className="App">
      <div className="container-search">
        <Field
          id="search-bar"
          data-cy="search-bar"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search ..."
        />
        <SearchBtn
          className="search-btn"
          data-cy="search-button"
          onClick={getCharacter}
        >
          Search
        </SearchBtn>
      </div>
      <div className="container">
        {characters.map((character) => (
          <PtcContainer>
            <Picture src={Image}></Picture>
            <CharacterCard
              name={character.name}
              height={character.height}
              birth_year={character.birth_year}
              films={character.films.length}
              id={character.url.split("/")[5]}
            ></CharacterCard>
          </PtcContainer>
        ))}
      </div>
      <div className="btn-place">
        <button className="btn" onClick={getMore} data-cy="btn-load-more">
          Load More_
        </button>
      </div>
    </div>
  );
}
export default MainContent;
const Field = styled.input`
  font-size: 1.5rem;
  border-radius: 10px;
  width: 30rem;
  height: 2rem;
`;
const SearchBtn = styled.button`
font-size: 1.5rem;
 border-radius: 10px;
 background-color:#ffb703;
  &:hover {
    background: #e9c46a;


 `;
const Picture = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;
const PtcContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
`;

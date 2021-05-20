import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FilmCard from "./FilmCard";

function CharacterPage() {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  const [filmList, setFilmList] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, []);



  // useEffect(function () {
  //   fetch(
  //     `http https://swapi.dev/api/starships/`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFilmList(data.results)
  //       console.log(data.results)
  //     });

  // }, []);
  return (
    <div>
      <h1>{details.name}</h1>
      <p>Height={details.height}</p>
      <p>Eye Color={details.eye_color}</p>
      <p>Birth Date={details.birth_year}</p>
      <p>Hair Color={details.hair_color}</p>
      <p>Films={details.films.length}</p>
    </div>
  );
}

export default CharacterPage;

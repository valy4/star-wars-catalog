import React, { useState, useEffect } from "react";


function FilmCard(props) {
  const [filmList, setFilmList] = useState([])

  useEffect(function () {
    fetch(
      `http https://swapi.dev/api/film/`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilmList(data.results)
        console.log(data.results)
      });

  }, []);

  return (<div>{props.title}</div>
  )
}



export default FilmCard
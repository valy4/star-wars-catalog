import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// This is a function component
function FilmCard(props) {
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setFilmData(data);

      });
  }, []);

  return <Link to={`/film/${filmData.url && filmData.url.split("/")[5]}`} > <div>{filmData.title}</div>
    <p>{new Date(filmData.release_date).getFullYear()}</p>
  </Link>
}

export default FilmCard;

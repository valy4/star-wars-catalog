import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// This is a function component
function FilmCard(props) {
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setFilmData(data);
      });
  }, [props.url]);

  return (
    <Link
      to={`/film/${filmData.url && filmData.url.split("/")[5]}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      {" "}
      <div className="titleYear">
        <p className="listTitle">{filmData.title}</p>
        <p>{new Date(filmData.release_date).getFullYear()}</p>
      </div>
    </Link>
  );
}

export default FilmCard;

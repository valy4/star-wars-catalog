
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"


function FilmPage() {
  const { id } = useParams()

  const [filmCrawl, setFilmCrawl] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilmCrawl([...filmCrawl, data.opening_crawl]);
        console.log(data)
      });
  }, []);
  return (
    <div>

      {filmCrawl.map((film) => (
        <p>opening={film}</p>
      ))}
    </div>
  )
}
export default FilmPage

import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import styled from "styled-components";
import { Link } from "react-router-dom";


function FilmPage() {
  const { id } = useParams()

  const [filmCrawl, setFilmCrawl] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilmCrawl((filmCrawl) => [...filmCrawl, data.opening_crawl]);
        console.log(data)
      });
  }, [id]);
  return (
    <div>

      {filmCrawl.map((film) => (
        <Container className="crawl">{film}</Container>
      ))}
      <div className="btn-place">
        <Link to={"/"}>
          <Btn className="btn">Back to home_</Btn>
        </Link>
      </div>
    </div>
  )
}
export default FilmPage
const Container = styled.div`
height: 450px;

`
const Btn = styled.button`
  font-size: 1rem;
`;
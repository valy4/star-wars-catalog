import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FilmCard from "../FilmCard";

function CharacterPage() {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  // const [listFilm, setListFilm] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);

        // data.films.forEach((film) => {
        //   fetch(film)
        //     .then((response) => response.json())
        //     .then((data) => {
        //       console.log(data);
        //       setListFilm((listFilm) => [...listFilm, data.title]);
        //     });
        // });
      });
  }, [id]);

  return (
    <Container>
      <Name>{details.name}</Name>
      <SecPage>
        <Line>Height={details.height}</Line>
        <Line>Eye Color={details.eye_color}</Line>
        <Line>Birth Date={details.birth_year}</Line>
        <Line>Hair Color={details.hair_color}</Line>
      </SecPage>
      <Films>Films={details.films?.length}</Films>

      <ListFilm>
        {details.films &&
          details.films.map((film) => <FilmCard url={film}></FilmCard>)}
      </ListFilm>
      {/* {details.films && details.films.map(film => <FilmCardClass url={film}></FilmCardClass>)} */}

      <div className="btn-place">
        <Link to={"/"}>
          <Btn className="btn">Back to home_</Btn>
        </Link>
      </div>
    </Container>
  );
}

export default CharacterPage;
const Container = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #219ebc;

`;

const SecPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5rem;
  & :hover {
    -moz-box-shadow: 0 0 50px #023047;
    -webkit-box-shadow: 0 0 50px #023047;
    box-shadow: 0 0 50px #023047;
  }
`;

const Line = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 50px;
`;

const Films = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15rem;
  height: 50px;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 5rem;
`;
const Name = styled.h1`
  color: #ffb703;
  margin-left: 10rem;
  padding-top: 2rem;
`;
const Btn = styled.button`
  font-size: 1rem;
`;
const ListFilm = styled.div`
  display: flex;
  flex-direction: column;

  width: 15rem;
  height: 30rem;
  margin-left: 5rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  & :hover {
    -moz-box-shadow: 0 0 50px #023047;
    -webkit-box-shadow: 0 0 50px #023047;
    box-shadow: 0 0 50px #023047;
  }
`;

import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function CharacterPage() {
  let { id } = useParams();
  const [details, setDetails] = useState([])
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
        console.log(data)
      })

  }, [])
  return (<div>
    <h1>{details.name}</h1>
    <p>Height={details.height}</p>

  </div>)
}


export default CharacterPage
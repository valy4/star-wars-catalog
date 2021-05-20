import { Link } from "react-router-dom"
import CharacterPage from "./Components/CharacterPage"


function CharacterCard(props) {
  return (
    <div className="character">
      <h2>{props.name}</h2>
      <p >Height: {props.height}</p>
      <p>Birth Year: {props.birth_year}</p>
      <p>Films: {props.films}</p>
      <Link to={`/people/${props.id}`}><button className="btn-details">See details</button></Link>
    </div >)
}
export default CharacterCard
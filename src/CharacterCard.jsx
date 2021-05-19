function CharacterCard(props) {
  return (
    <div className="character">
      <h2>{props.name}</h2>
      <p >Height: {props.height}</p>
      <p>Birth Year: {props.birth_year}</p>
      <p>Films: {props.films}</p>
      <button className="btn-details">See details</button>
    </div>)
}
export default CharacterCard
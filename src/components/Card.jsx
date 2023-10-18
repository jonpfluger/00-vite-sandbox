const Card = props => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.avatar_url}
        alt={`Picture of ${props.name}`}
      />

      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">I am {props.age} years old. I have a pet: {props.hasPet.toString()}</p>
      </div>
    </div>
  )
}

export default Card
import React from 'react'

const Venue = (props) => {
  return (
    <div className="venue-show">
      <div>
        <h3>{props.name}</h3>
      </div>

      <div>
        <p>{props.address}</p>
        <p>{props.description}</p>
        <p>{props.capacity}</p>
        <p>{props.url}</p>
        <p><img src={props.image} width="500"/></p>
      </div>
    </div>
  )
}

export default Venue;

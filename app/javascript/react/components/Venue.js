import React from 'react'

const Venue = (props) => {
  return (
    <div>
      <div className="show-head">
        <h3>{props.name}</h3>
      </div>

      <div>
        <p>{props.address}</p>
        <p>{props.description}</p>
        <p>Capacity: {props.capacity}</p>
        <p><a href={props.url}><img href={props.url} src={props.image}/></a></p>
        <a href={props.url}>
          <button>
            Visit Site
          </button>
        </a>
      </div>
    </div>
  )
}

export default Venue;

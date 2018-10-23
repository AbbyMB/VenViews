import React from 'react'

const Review = (props) => {
  return (
    <div className="venue-show">
        <h6>rating: {props.rating}</h6>
        <h6>{props.description}</h6>
    </div>
  )
}

export default Review;

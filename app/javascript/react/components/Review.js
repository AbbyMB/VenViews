import React from 'react'

const Review = (props) => {

  let deleteButton

  if (props.userId === props.reviewUserId) {

    deleteButton = <button onClick={props.deleteHandler}>Delete</button>
  }

  return (
    <div className="review">
      <h6>Rating: {props.rating}</h6>
      <h6>{props.description}</h6>
      {deleteButton}
    </div>
  )
}

export default Review;

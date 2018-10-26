import React from 'react'

const RatingSelector = props => {
  return(
    <label>
      Rating:
      <select onChange={props.handleRatingChange} value={props.content}>
        <option value="select rating">Select rating</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </label>
  )

}

export default RatingSelector;

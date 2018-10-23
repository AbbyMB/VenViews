import React from 'react'

const DescriptionField = props => {
  return(
    <label>
      Description:
      <input
        type="text"
        onChange={props.handleDescriptionChange}
        value={props.content}
         />
    </label>
  )

}

export default DescriptionField;

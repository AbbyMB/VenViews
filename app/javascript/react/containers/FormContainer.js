import React, { Component } from 'react';
import RatingSelector from '../components/RatingSelector';
import DescriptionField from '../components/DescriptionField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        rating: null,
        description: ''
      }
    };
  }

  render() {
    return(
      <div>
        <form>
          <h3>Add New Review</h3>
          <DescriptionField />
          <RatingSelector />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default FormContainer;

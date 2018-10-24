import React, { Component } from 'react';
import RatingSelector from '../components/RatingSelector';
import DescriptionField from '../components/DescriptionField';
import Venue from '../components/Venue';
import Review from '../components/Review';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rating: 'select rating',
        description: '',
        vote_count: null
    };
  this.handleRatingChange = this.handleRatingChange.bind(this)
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm(){
    this.setState({
      rating: 'select rating',
      description: ''
    })
  }

  handleRatingChange(event){
    this.setState({ rating: event.target.value })
  }
  handleDescriptionChange(event){
      this.setState({ description: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.user !== null){
      let formPayload = {
        rating: this.state.rating,
        description: this.state.description,
        vote_count: 0
      }
      this.props.addNewReview(formPayload)
      this.handleClearForm()
    } else {
      alert('Must be logged in for this review to be submitted');
      this.handleClearForm()
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add New Review</h3>
          <DescriptionField
            handleDescriptionChange={this.handleDescriptionChange}
            content={this.state.description}
          />
          <RatingSelector
            handleRatingChange={this.handleRatingChange}
            content={this.state.rating}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default FormContainer;

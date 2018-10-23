import React, { Component } from 'react';
import FormContainer from './FormContainer'
import Venue from '../components/Venue';
import Review from '../components/Review';

class VenueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        description: '',
        capacity: null,
        url: '',
        image: '',
        reviews: []
    };
  this.addNewReview = this.addNewReview.bind(this)
  }

  componentDidMount() {
    let venueId = this.props.params.id
    fetch(`/api/v1/venues/${venueId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ name: body.venue.name, address: body.venue.address, description: body.venue.description, capacity: body.venue.capacity, url: body.venue.url, image: body.venue.image, reviews: body.venue.reviews });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload){
    let venueId = this.props.params.id
    fetch(`/api/v1/venues/${venueId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(newlyCreatedReview => {
        let allReviews = this.state.reviews
        let newReview = newlyCreatedReview.review
        this.setState({ reviews: allReviews.concat(newReview) })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
      let reviews = this.state.reviews.map(review => {
        return(
          <Review
            key={review.id}
            id={review.id}
            rating={review.rating}
            description={review.description}
          />
        )
      })


    return (
      <div>
      <Venue
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        capacity={this.state.capacity}
        url={this.state.url}
        image={this.state.image}
        />
      <h4 className="row_column">Reviews</h4>
        {reviews}
      <FormContainer
        addNewReview={this.addNewReview}
        id = {this.props.params.id}
      />
      </div>
    );
  }
}

export default VenueContainer;

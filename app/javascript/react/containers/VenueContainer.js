import React, { Component } from 'react';

import Venue from '../components/venue';

class VenueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {
        name: '',
        address: '',
        description: '',
        capacity: null,
        url: ''
      }
    };
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
        this.setState({ venue: body.venue });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
      <Venue
        name={this.state.venue.name}
        address={this.state.venue.address}
        description={this.state.venue.description}
        capacity={this.state.venue.capacity}
        url={this.state.venue.url}
        />
      </div>
    );
  }
}

export default VenueContainer;

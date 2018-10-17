import VenueContainer from '../../app/javascript/react/containers/VenueContainer';
import Venue from '../../app/javascript/react/components/Venue';
import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import 'jasmine-ajax';

describe('VenueContainer', () => {
  let wrapper;

  beforeEach(() => {
    venues = [
    {id: 1,
    name: "Our Venue",
    description: "This is a venue!",
    address: "77 Summer St",
    capacity: 35,
    url: "http://www.launchacademy.com"},

    {id: 3,
    name: "Fun Venue",
    description: "So so fun!",
    address: "77 Winter St",
    capacity: 199,
    url: "http://www.funacademy.com"}
  ]
  fetchMock.get('/api/v1/venues/1', {
    status: 200,
    body: venue
  });
    wrapper = mount(
      <VenueContainer
        params={
          {id: 1}
        }
      />
    );
  });

  afterEach(fetchMock.restore)

  describe('show', () => {

    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h3').text()).toEqual(venues[0].name)
        expect(wrapper.find('p').text()).toEqual(venues[0].description)
        expect(wrapper.find('p').text()).toEqual(venues[0].address)
        expect(wrapper.find('p').text()).toEqual(venues[0].capacity)
        done()
      }, 0)
    })
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      venue: {
        name: '',
        address: '',
        description: '',
        capacity: null,
        url: ''
      }
    });
  })

  it('should render a Venue Component', () => {
    expect(wrapper.find(Venue)).toBePresent();
  });

  it('should render the Venue Component with specific props', () => {
    wrapper.setState({
      venue: {
        name: "Our Venue",
        description: "This is a venue!",
        address: "77 Summer St",
        capacity: 35,
        url: "http://www.launchacademy.com"
      }
    });
    expect(wrapper.find(Venue).props()).toEqual({
      name: "Our Venue",
      description: "This is a venue!",
      address: "77 Summer St",
      capacity: 35,
      url: "http://www.launchacademy.com"
    })
  })
});

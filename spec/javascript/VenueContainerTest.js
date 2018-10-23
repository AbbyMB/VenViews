import fetchMock from 'fetch-mock'
import VenueContainer from '../../app/javascript/react/containers/VenueContainer'
import Venue from '../../app/javascript/react/components/Venue'

describe('VenueContainer', () => {
  let wrapper;
  let venues;

  beforeEach(() => {
    venues = [
      {id: 1,
      name: "Our Venue",
      description: "This is a venue!",
      address: "77 Summer St",
      capacity: 35,
      url: "http://www.launchacademy.com"}
    ]
    fetchMock.get('/api/v1/venues/1', {
      status: 200,
      body: venues
    });
    wrapper = mount(
      <VenueContainer
        params={
          {id: 1,
          name: "Our Venue",
          description: "This is a venue!",
          address: "77 Summer St",
          capacity: 35,
          url: "http://www.launchacademy.com"}
        }
      />
    );
  });

  afterEach(fetchMock.restore)

  describe('show', () => {
    it('renders an h3 tag', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h3')).toBePresent()
        done()
      }, 0)
    })

    it('should render a Venue', (done) => {
      setTimeout(() => {
        expect(wrapper.find(VenueContainer).props()).toEqual({
          params: {
            id: 1,
            name: "Our Venue",
            description: "This is a venue!",
            address: "77 Summer St",
            capacity: 35,
            url: "http://www.launchacademy.com"
          }
        })
        done()
      }, 0)
    })
  })
});

import fetchMock from 'fetch-mock'
import VenueContainer from '../../app/javascript/react/containers/VenueContainer'
import Venue from '../../app/javascript/react/components/Venue'

describe('VenueContainer', () => {
  let wrapper;
  let testVenue;
  let reviews;

  beforeEach(() => {

    jasmineEnzyme();
    testVenue = {
      id: 1,
      name: "Our Venue",
      address: "77 Summer St",
      description: "This is a venue!",
      capacity: 35,
      url: "http://www.launchacademy.com",
      image: "http://press.emerson.edu/wers/files/2016/03/DSC_0073.jpg",
      reviews: [
        {
          id: 1,
          rating: 4,
          description: "love it"
        }, {
          id: 2,
          rating: 3,
          description: "meh"
        }
    ]}
    fetchMock.get('/api/v1/venues/1', {
      status: 200,
      body: {venue: testVenue}
    });
    wrapper = mount(
      <VenueContainer
        params={
          {id: 1, name: "Our Venue", address: "77 Summer St", description: "This is a venue!", capacity: 35, url: "http://www.launchacademy.com", image: "http://press.emerson.edu/wers/files/2016/03/DSC_0073.jpg", reviews: [{id: 1, rating: 4, description: "love it"}, {id: 2, rating: 3, description: "meh"}]}
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
          params: {id: 1, name: "Our Venue", address: "77 Summer St", description: "This is a venue!", capacity: 35, url: "http://www.launchacademy.com", image: "http://press.emerson.edu/wers/files/2016/03/DSC_0073.jpg", reviews: [{id: 1, rating: 4, description: "love it"}, {id: 2, rating: 3, description: "meh"}]}
        })
        done()
      }, 0)
    })
  })
});

import fetchMock from 'fetch-mock'
import VenueContainer from '../../app/javascript/react/containers/VenueContainer'
import Venue from '../../app/javascript/react/components/Venue'
import Review from '../../app/javascript/react/components/Review'
import FormContainer from '../../app/javascript/react/containers/FormContainer'


describe('VenueContainer', () => {
  let wrapper;
  let venue;
  let currentUser;

  currentUser = {
    id: 1,
    email: "jctbog9@aol.com",
    created_at: "2018-10-25T19:24:25.281Z",
    updated_at: "2018-10-25T19:24:25.281Z",
    role: "member",
    profile_photo: {
      url: "/uploads/user/profile_photo/1/crystal-12.jpg"
    }
  }
  venue = {
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

  beforeEach(() => {
    jasmineEnzyme();

    fetchMock.get('/api/v1/venues/1', {
      status: 200,
      body: {venue: venue}
    });
    fetchMock.get('/api/v1/current_user', {
      status: 200,
      body: {user: currentUser}
    });

    wrapper = mount(
      <VenueContainer
        params={{id: venue.id }}
      />
    );
  });

  afterEach(fetchMock.restore)
  // See the Implementing tests in React article or Nick's lessons supplement from his facilitation
  // - test that the initial state is as expected
  // - have one test each that ensures that a Venue, FormContainer and Review tile are present
  // - have a test that ensures that Venue is getting the correct props passed to it


  describe('show', () => {

    it('has specified initial state', () => {
      expect(wrapper.state()).toEqual({
          user: {},
          name: '',
          address: '',
          description: '',
          capacity: null,
          url: '',
          image: '',
          reviews: []
        })
      })

    it('renders a Venue Component', (done) => {
      setTimeout(() => {
        expect(wrapper.find(Venue)).toBePresent()

        done()
      }, 0)
    })


    it('renders a Review Component', (done) => {
      setTimeout(() => {
        expect(wrapper.find(Review)).toBePresent()

        done()
        }, 0)
      })

      it('renders a FormContainer Component', (done) => {
        setTimeout(() => {
          expect(wrapper.find(FormContainer)).toBePresent()

          done()
        }, 0)
      })



    // expect(wrapper.find(Venue)).toEqual({
    //   name: venue.name,
    //   address: venue.address,
    //   description: venue.description,
    //   capacity: venue.capacity,
    //   url: venue.url,
    //   image: venue.image
    // })
  })
});

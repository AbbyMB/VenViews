import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import VenueContainer from '../containers/VenueContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/venues/:id' component={VenueContainer} />
    </Router>
  )
}

export default App

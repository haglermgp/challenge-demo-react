import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import withRoot from './withRoot.js'

import Routes from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// The root function that receive and provide the redux store configuration to all views of the project
const Root = ({ store }) => (
  <Provider store={store} >
  	<Router>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default withRoot(Root)

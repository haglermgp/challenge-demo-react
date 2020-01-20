import React from 'react';                                                                                                                                                                                                                                                                                                                                                                                                          
import withRoot from '../withRoot.js'

import {
  Switch,
  Route,
} from 'react-router-dom'

// layouts
import { MainLayout } from '../layouts'

// views
import Home from './home';
import Manage from './manage';
import Request from './request';
import Review from './review';

const Root = () => { 
return (
  <React.Fragment>
    <Switch>
      <Route path="/manage" component={Manage} />
      <Route exact path="/requests" component={Request} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
)}

export default MainLayout(withRoot(Root))

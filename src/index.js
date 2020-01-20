import React from 'react';
import { render } from 'react-snapshot';
import configureStore from './redux/store/configureStore'
import Root from './Root'

let store = configureStore();

const rootEl = document.getElementById('root')
render(<Root store={store} />, rootEl)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default
    render(<NextApp />, rootEl)
  })
}

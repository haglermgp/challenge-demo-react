import React from 'react';
import { render } from 'react-snapshot';
import configureStore from './redux/store/configureStore'
import Root from './Root'

// FIREBASE -----------------------
// import firebase from 'firebase/app';

// var config = {  
//   // apiKey: "AIzaSyCzqPUOAk0eSyybVaYGXbhpHOMITK14GI4",
//   // authDomain: "fynancy-app-dev.firebaseapp.com",
//   // databaseURL: "https://fynancy-app-dev.firebaseio.com",
//   // projectId: "fynancy-app-dev",
//   // storageBucket: "fynancy-app-dev.appspot.com",
//   // messagingSenderId: "322263331235"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

let store = configureStore();

const rootEl = document.getElementById('root')
render(<Root store={store} />, rootEl)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default
    render(<NextApp />, rootEl)
  })
}

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { loadState, saveState } from './localStorage'

import reducersApp from '../reducers'

// This function makes posible update the local of the application
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    reducersApp,
    persistedState,
    applyMiddleware(thunk)
  )

  store.subscribe(throttle(() => {
   saveState({
      manageList: store.getState().manageList,
      requestsList: store.getState().requestsList
   })
  }, 5000))

  return store
}

export default configureStore
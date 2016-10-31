// TODO: export a `configureStore` function instead of a created store.

import { createStore } from 'redux'
import reducer from './counter-app/reducer'

let initialState = {};
if (global.window) {
  initialState = HULU.INITIAL_STATE;
}

const store = createStore(reducer, initialState)

if (global.window) {
  window.store = store;
}

export default store;


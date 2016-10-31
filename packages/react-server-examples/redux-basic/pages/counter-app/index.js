import React from 'react'
import { RootContainer, RootElement } from 'react-server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from '../../components/Counter'
import Dehydrate from '../../components/Dehydrate'
import reducer from './reducer'
import store from '../store'

export default class CounterPage {

  getElements() {
    let storeUpdatedPromise;

    // TODO: make below logic in abstract function of store.
    if (global.window) {
      storeUpdatedPromise = Promise.resolve(HULU.INITIAL_STATE);
    } else {
      const counterPromise = Counter.init();

      storeUpdatedPromise = counterPromise.then( (count) => {
        store.dispatch({type: 'INIT', val: {count} })
        const pageState = {
          count
        };
        return pageState;
      }).then( (result) => {
        return result;
      });
    }

    return [
      <RootContainer>
        <RootElement key={0} when={storeUpdatedPromise}>
          <Provider store={store}>
            <div>
              <Counter
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
              />
              <Dehydrate />
            </div>
          </Provider>
        </RootElement>
      </RootContainer>
    ]
  }

  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Redux Counter app, powered by React Server'},
      {name: 'generator', content: 'React Server'},
    ]
  }
}

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {Map as map} from 'immutable'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

function logger_({getState, dispatch}){
  return (next) =>{
    return (action) =>{
      console.log('Se enviara esta accion ', action)
      const value = next(action)
      console.log('este es mi nuevo estado ', getState().toJS())
      return value
    }
  }
}

export const store = createStore(
    rootReducer,
    map(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        logger
    )
);

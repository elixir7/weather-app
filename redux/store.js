//This is the store which stores the data. Some middleware is applied for developertools
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import { fetchWeather } from './actions'

const loggerMiddleware = createLogger()

export default function configureStore(){

  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return store
}

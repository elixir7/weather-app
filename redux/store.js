import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import { fetchWeather } from './actions'

export default function configureStore(){
  const loggerMiddleware = createLogger()
  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return store
}

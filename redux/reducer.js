import { RECEIVE_WEATHER } from './actions'
export default function reducer(state = {}, action){
  switch(action.type){
    case RECEIVE_WEATHER:
      return (
        Object.assign({}, state, {
          weather: action.weather,
          updatedAt: action.receivedAt
        })
      );
    default:
      return state
  }
}

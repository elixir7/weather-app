//These are the reducers that contains the logic of the store
import { REQUEST_WEATHER, RECEIVE_WEATHER, CHANGE_UNIT } from './actions'
export default function reducer(state = {unit: 'metric', loaded: false}, action){
  switch(action.type){
    case REQUEST_WEATHER:
    return (
      Object.assign({}, state, {
        isFetching: true,
        pos: action.pos,
        loaded: false
      })
    );
    case RECEIVE_WEATHER:
      return (
        Object.assign({}, state, {
          weather: action.weather,
          isFetching: false,
          loaded: true,
          updatedAt: action.receivedAt
        })
      );
    case CHANGE_UNIT:
      return (
        Object.assign({}, state, {
          unit: action.unit
        })
      );
    default:
      return state
  }
}

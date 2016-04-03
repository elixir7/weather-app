export default function reducer(state = [], action){
  switch(action.type){
    case 'CHANGE_UNITS':
      return (
        Object.assign({}, state, {
          unit: action.unit
        })
      );

    default:
      return state
  }
}

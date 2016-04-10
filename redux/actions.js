import fetch from 'isomorphic-fetch'

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather(params) {
  return {
    type: REQUEST_WEATHER,
    pos: params.pos
  }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    weather: json,
    receivedAt: Date.now(),
  }
}

export const CHANGE_UNIT = 'CHANGE_UNIT';
function updateUnit(unit){
  return {
    type: CHANGE_UNIT,
    unit
  }
}

function createQuery(params){
  //params is an object containing pos, city and unit
  if(params.pos.city){
    return 'q=' + params.pos.city + '&units=' + params.unit;
  } else {
    return 'lat=' + params.pos.coords.lat + '&lon=' + params.pos.coords.lon + '&units=' + params.unit;
  }

}

const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
const apiKey = '&appid=f06dae075f128fd55d49a2655d6e1a9a'
export function fetchWeather(params, currentUnit) {

  return function (dispatch) {

    const query = createQuery(params);

    if(params.unit !== currentUnit && currentUnit !== undefined){
      dispatch(updateUnit(params.unit));
    }

    dispatch(requestWeather(params));

    return fetch(baseUrl + query + apiKey)

      .then(response => response.json())
      .then(json =>

        dispatch(receiveWeather(json))
      )

  }
}

import fetch from 'isomorphic-fetch'

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather(lat, lon) {
  return {
    type: REQUEST_WEATHER,
    lat,
    lon
  }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    weather: json,
    receivedAt: Date.now()
  }
}

const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
const apiKey = '&appid=f06dae075f128fd55d49a2655d6e1a9a'
export function fetchWeather(lat, lon) {

  return function (dispatch) {

    dispatch(requestWeather(lat, lon))

    return fetch(baseUrl + 'lat=' + lat + '&lon=' + lon + apiKey)

      .then(response => response.json())
      .then(json =>

        dispatch(receiveWeather(json))
      )

  }
}

export const Actions = {
  changeUnit(unit){
    return {
      type: 'CHANGE_UNIT',
      unit: unit
    }
  }
}

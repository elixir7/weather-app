import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'
import Loader from 'react-loader'

import Helpers from '../components/helpers'

import Spinner from '../components/spinner'
import SearchBox from '../components/searchbox'
import TodayWeatherBox from '../components/todayweatherbox'
import FutureWeatherBox from '../components/futureweatherbox'

class WeatherApp extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changeUnit = this.changeUnit.bind(this);
  }

  componentDidMount(){
    const geolocSucess = (pos) => {
      const info = {
        pos: {
          coords: {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
          }
        },
        unit: this.props.unit
      }
      this.props.dispatch(fetchWeather(info));
    }

    //If the browser doesn't support geolocation or it doesn't work
    const geolocError = () => {
      const info = {
        pos: {
          city: "Gothenburg"
        },
        unit: this.props.unit
      }
      this.props.dispatch(fetchWeather(info));
    }

    const geolocOptions = {
      enableHighAccuracy: true,
      timeout: 5000
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geolocSucess, geolocError, geolocOptions);
    }
    else {
      geolocFail()
    }
  }

  search(city){
    this.props.dispatch(fetchWeather(
      {
        pos: {
          city: city
        },
        unit: this.props.unit
      }
    ));
  }

  changeUnit(){
    let unit;
    if(this.props.unit == 'metric'){
      unit = 'imperial'
    }else{
      unit = 'metric'
    }
    const info = {
      pos: this.props.pos,
      unit: unit
    }
    this.props.dispatch(fetchWeather(info, this.props.unit))
  }

  render(){
    let loadedApp;

    if(this.props.loaded === true){
      loadedApp = <div style={Helpers.evalBackground(this.props.weather.list[0].dt_txt)}>
        <SearchBox search={this.search}/>
        <TodayWeatherBox
          changeUnit={this.changeUnit}
          city={this.props.weather.city.name}
          country={this.props.weather.city.country}
          temp={this.props.weather.list[0].main.temp}
          windSpeed={this.props.weather.list[0].wind.speed}
          icon={this.props.weather.list[0].weather[0].icon}
          iconID={this.props.weather.list[0].weather[0].id}
          unit={this.props.unit}/>
        <FutureWeatherBox
          unit={this.props.unit}
          list={this.props.weather.list}/>
      </div>
    }else{
      loadedApp = <Spinner />
    }
    return (
      <div>
        {loadedApp}
      </div>
  );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps)(WeatherApp)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'
import Loader from 'react-loader'

import Morning from '../client/images/morning.jpg'
import Day from '../client/images/day.jpg'
import Night from '../client/images/night.jpg'
import Test from '../components/test'
import SearchBox from '../components/searchbox'
import TodayWeatherBox from '../components/todayweatherbox'
import FutureWeatherBox from '../components/futureweatherbox'

// const height = width * (2000/1124);
const imgStyle = {
  backgroundImage: 'url(' + Night + ')',
  backgroundSize: 'cover',
  width: "100%",
}

class WeatherApp extends Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changeUnit = this.changeUnit.bind(this);
    this.evalBackground = this.evalBackground.bind(this);
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

  evalBackground(){
    if(this.props.weather){
      let background
      const time = Number(this.props.weather.list[0].dt_txt.substring(11, 13));
      if(time > 0 && time <= 3 || time >= 18 ){
        backgroud = Night;
      }else if(time >= 6 && time > 12){
        background = Morning;
      }else {
        background = Day;
      }
    }
  }

  render(){
    return (
      <Loader loaded={this.props.loaded} lines={8} length={0} width={15} radius={30} color="#46ca75" loadedClassName="loader">
        <div style={imgStyle}>
          <SearchBox search={this.search}/>
          <TodayWeatherBox
            changeUnit={this.changeUnit}
            city={this.props.weather ? this.props.weather.city.name : null}
            country={this.props.weather ? this.props.weather.city.country : null}
            temp={this.props.weather ? this.props.weather.list[0].main.temp : null}
            windSpeed={this.props.weather ? this.props.weather.list[0].wind.speed : null}
            icon={this.props.weather ? this.props.weather.list[0].weather[0].icon : null}
            iconID={this.props.weather ? this.props.weather.list[0].weather[0].id : null}
            unit={this.props.unit}/>
          <FutureWeatherBox
            unit={this.props.unit}
            list={this.props.weather ? this.props.weather.list : null}/>
        </div>
      </Loader>
  );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps)(WeatherApp)

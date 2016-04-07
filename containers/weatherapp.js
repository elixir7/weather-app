import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'
import Test from '../components/test'
import Loader from 'react-loader'
import Day from '../client/images/day.jpg'

const width = 400;
const height = width * 1.9627;
const imgStyle = {
  backgroundImage: 'url(' + Day + ')',
  backgroundSize: 'contain',
  width: width,
  height: height
}

class WeatherApp extends Component {

  constructor(props) {
    super(props);
    this.state = {input: ''};
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

  onChange(e){
    this.setState({input: e.target.value});
  }

  onClick(){
    this.props.dispatch(fetchWeather(
      {
        pos: {
          city: this.state.input
        },
        unit: this.props.unit
      }
    ));
    this.setState({input: ''})
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
    return (
      <Loader loaded={this.props.loaded} lines={8} length={0} width={15} radius={30} color="#46ca75" top="50%" left="10%">
        <div style={imgStyle}>
          <h1>Weather Route</h1><i className="wi wi-day-sunny"></i>
          <Test city={this.props.weather ? this.props.weather.city.name : null}
                temp={this.props.weather ? this.props.weather.list[0].main.temp : null}
                unit={this.props.unit}/>
          <input type="text" value={this.state.input} onChange={this.onChange.bind(this)} />
          <button type="btn" className="btn btn-default" onClick={this.onClick.bind(this)}>Search</button>
          <button type="btn" className="btn btn-default" onClick={this.changeUnit.bind(this)}>Change Unit</button>
        </div>
      </Loader>
  );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps)(WeatherApp)

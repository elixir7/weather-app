import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'
import Test from '../components/test'

class WeatherApp extends Component {

  componentDidMount(){
    this.props.dispatch(fetchWeather(57.5428249, 11.9398003)).then(() =>
      console.log(this.props.weather)
    )
  }

  render(){
    return (
      <div>
        <h1>Weather Route</h1>
        <Test  city={this.props.weather ? this.props.weather.city.name : "Finding"} />
      </div>
  );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps)(WeatherApp)

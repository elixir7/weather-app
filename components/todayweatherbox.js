import React from 'react'

import Helpers from './helpers'

const weatherIcon = {
  fontSize: 60,
  color: '#ffffff',
  paddingTop: 5
}
const whiteColor ={
  color: '#ffffff',
}
const wrapper = {
  paddingTop: 10,
  marginLeft: 5,
  marginRight: 5,
  paddingBottom: 200
}
const temp = {
  paddingTop: 20,
  color: '#ffffff',
  fontSize: 36
}
const units ={
  color: '#ffffff',
  cursor: 'pointer'
}

export default class TodayWeatherBox extends React.Component {

  render() {
    return (
      <div className="row" style={wrapper}>
        <div className="col-xs-6">
          <span style={whiteColor}>{this.props.city + ', ' + this.props.country}</span>
        </div>
        <div className="col-xs-6 text-right">
          <span style={units} onClick={this.props.changeUnit}>°F/°C</span>
        </div>
        <div className="col-xs-12 text-center">
          <h1 style={temp}>{Math.round(this.props.temp) + Helpers.evalUnit(this.props.unit)}</h1>
          <p style={whiteColor}>{Helpers.evalTemp(this.props.temp, this.props.windSpeed, this.props.unit)}</p>
          <i className={Helpers.evalIcon(this.props.icon, this.props.iconID)} style={weatherIcon}/>
        </div>
      </div>

    );
  }
}

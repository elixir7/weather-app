import React from 'react';

import Helpers from './helpers'

const iconStyle = {
  color: '#ffffff',
  fontSize: 24,
  paddingBottom: 10
}
const date = {
  color: '#ffffff',
  fontSize: 14,
  paddingBottom: 10
}
const temp = {
  color: '#ffffff',
  fontSize: 14,
  paddingBottom: 10
}
const flexItem ={
  flexGrow: 1
}

export default class FutureWeatherBoxItem extends React.Component {
  render() {
    return (
      <div style={flexItem}>
        <div className="row">
          <div className="col-xs-12 text-center">
            <div style={date}>{this.props.date}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <i className={Helpers.evalIcon(this.props.icon, this.props.iconID)} style={iconStyle}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <div style={temp}>{Math.round(this.props.temp) + Helpers.evalUnit(this.props.unit)}</div>
          </div>
        </div>
      </div>
    );
  }
}

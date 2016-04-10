//This is the component that shows the forecast of an etire day when a day is clicked.
import React from 'react';

import Helpers from '../components/helpers'

const descIcon = {
  fontSize: 30,
  marginBottom: 10,
  color: '#ffffff'
}

const date ={
  marginTop: 60,
  marginBottom: 60,
  color: '#ffffff'
}

const cross ={
  paddingTop: 20,
  paddingLeft: 30,
  fontSize: 36,
  color: '#ffffff'
}
const wrapper ={
  paddingBottom: 120,
  display: 'none'
}

const itemStyle= {
  color: '#ffffff',
  fontSize: 14,
}
const itemIconStyle = {
  color: '#ffffff',
  fontSize: 18
}
export default class Day extends React.Component {

  render() {
    let items;
    let dateInText;
    if(this.props.date != null){
      dateInText = this.props.date.substring(8, 10) + ' ' + Helpers.evalDT_TXT(this.props.date);
      items = this.props.list.map(function(item, key){
        if(item.dt_txt.substring(0, 10) == this.props.date.substring(0, 10)){
          return(
            <div key={key} className="row">
              <div className="col-xs-3 text-center">
                <p style={itemStyle}>
                  {item.dt_txt.substring(11,16)}
                </p>
              </div>
              <div className="col-xs-3 text-center">
                <p>
                  <i style={itemIconStyle} className={Helpers.evalIcon(item.weather[0].icon, item.weather[0].id)} />
                </p>
              </div>
              <div className="col-xs-3 text-center">
                <p style={itemStyle}>
                  {Math.round(item.wind.speed) + Helpers.evalSpeedUnit(this.props.unit)}
                </p>
              </div>
              <div className="col-xs-3 text-center">
                <p style={itemStyle}>
                  {Math.round(item.main.temp) + Helpers.evalUnit(this.props.unit)}
                </p>
              </div>
            </div>
          );
        }
      }.bind(this));
    }else{
      dateInText = null;
      items = null;
    }

    return (
      <div id="popupDay" style={wrapper}>
        <i className="fa fa-times" style={cross} onClick={this.props.closeDay}/>
        <div className="text-center">
          <h1 className="text-uppercase" style={date}>
            {dateInText}
          </h1>
          <div className="row">
            <div className="col-xs-3 text-center">
              <i className="fa fa-clock-o" style={descIcon}/>
            </div>
            <div className="col-xs-3 text-center">
              <i className="wi wi-cloud" style={descIcon} />
            </div>
            <div className="col-xs-3 text-center">
              <i className="wi wi-strong-wind" style={descIcon}/>
            </div>
            <div className="col-xs-3 text-center">
              <i className="wi wi-thermometer" style={descIcon} />
            </div>
          </div>
          <div>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

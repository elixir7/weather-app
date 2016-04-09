import React from 'react';
import Helpers from './helpers'

import FutureWeatherBoxItem from './futureweatherboxitem'

const flexBox ={
  display: "flex"
}

export default class FutureWeatherBox extends React.Component {
  render() {
      const futureWeatherBoxItem = this.props.list.map(function(item, key) {
        if(item.dt_txt.substring(11, 13) == "15"){
          return (
            <FutureWeatherBoxItem
              key={key}
              unit={this.props.unit}
              date={Helpers.evalDateShort(item.dt)}
              temp={item.main.temp}
              icon={item.weather[0].icon}
              iconID={item.weather[0].id}
            />
          );
        }
      }.bind(this));


    return (
      <div className="row">
        <div className="col-xs-12">
          <div style={flexBox}>
            {futureWeatherBoxItem}
          </div>
        </div>
      </div>
    );
  }
}

//This Component acts as a container for all the small days on the buttom of the app. 
import React from 'react';
import Helpers from './helpers'

import FutureWeatherBoxItem from './futureweatherboxitem'

const flexBox ={
  display: "flex"
}

export default class FutureWeatherBox extends React.Component {
  render() {
    let futureWeatherBoxItem;
    if(this.props.list != null){
      futureWeatherBoxItem = this.props.list.map(function(item, key) {
        if(item.dt_txt.substring(11, 13) == "15"){
          return (
            <FutureWeatherBoxItem
              key={key}
              unit={this.props.unit}
              date={Helpers.evalDateShort(item.dt)}
              rawDate={item.dt_txt}
              temp={item.main.temp}
              icon={item.weather[0].icon}
              iconID={item.weather[0].id}
              onDayClick={this.props.onDayClick}
              list={this.props.list}
            />
          );
        }
      }.bind(this));
    }else {
      futureWeatherBoxItem = null
    }

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

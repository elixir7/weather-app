//This is the  "the app" page
import React from 'react';

import Button from './button'

export default class TheApp extends React.Component {
  render() {
    return (
      <div>
        <h2>The App</h2>

        <h4>How do I use it?</h4>
        <p>This is a weather application that runs in the browser with the help of java script. If you allow the site to use your location the app will automatically find the closest weather station to your location. If you don't allow it, it will default to Gothenburg which is for some reason called Nordstaden. You may then search for a city. To improve search result you can add the Alpha-2 <a href="" target="_blank">ISO 3166 country code</a> after the city, separeted by a comma like this: "Gothenburg, SE" or "London, GB".</p>

        <p>You can change the unit to "metric" or "imperial" by clicking the "°F/°C" section of the app. This will decide if temperature and speed is displayed as Celcius, m/s(meters per second) or Farenheit, mph(miles per hour).</p>

        <p>You can also click on the small boxes at the bottom to see the weather throughout that day.</p>

        <h4>Where does the data come from?</h4>
        <p>The weather data is gatherd from <a href="http://openweathermap.org/" target="_blank">OpenWeatherMap</a> with the help of your location or by searching on a city. OpenWeatherMap tries to find the closest weather station to your location or your search.</p>

        <h4>Inerested?</h4>
        <p>If you are interested in how everything works and want to look at the files, it's opensource and you can check it out over at <a href="https://github.com/elixir7" target="_blank">Github</a>. Feel free to send in a Pull-Request or an issue if you find something that could be better.</p>
        <button style={Button} className="text-uppercase">GitHub</button>
      </div>
    );
  }
}

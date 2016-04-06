import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import WeatherApp from '../containers/weatherapp';
import Intro from '../components/intro';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Intro} />
    <Route path="/weather" component={WeatherApp} />
  </Route>
);

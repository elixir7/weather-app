import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from '../redux/store';
import 'babel-polyfill';
import { fetchWeather } from '../redux/actions'

import Root from './root';
import routes from './routes';


const store = configureStore();

render(
  <Root store={store} history={browserHistory} routes={routes}/>,
   document.getElementById('app')
 );

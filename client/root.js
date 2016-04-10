//Root.js is the file that gives the application it's provider and router.
//The Provider gives the app a way to connect to the redux store
//The Router is what keeps track of where you are in the application. It does this with routes
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component{
  render() {
    return (
      <Provider store={this.props.store}>
          <Router history={this.props.history} routes={this.props.routes} />
      </Provider>
    );
  }
}

export default Root;

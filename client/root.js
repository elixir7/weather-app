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

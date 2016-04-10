import React from 'react';

const spinner ={
  fontSize: 100,
  color: '#46ca75',
}

const loadingText ={
  paddingTop: 10
}

const borderRadius = 2;
const spinnerContainer = {
  paddingTop: 200,
  paddingBottom: 200,
  backgroundColor: '#ffffff',
  boxShadow: "3px 3px 3px 1px rgba(0, 0, 0, 0.1)",
  borderRadius: borderRadius,
  WebkitBorderRadius: borderRadius,
  MozBorderRadius: borderRadius,
}

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="text-center" style={spinnerContainer}>
        <i className="fa fa-spinner fa-spin" style={spinner}></i>
        <h4 style={loadingText}>Loading ...</h4>
      </div>
    );
  }
}

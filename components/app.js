import React from 'react';

import Nav from './nav'
import WeatherApp from '../containers/weatherapp'

const navLinks = [
  {
    title: "The App",
    href: "/"
  },
  {
    title: "Design",
    href: "/design"
  },
  {
    title: "Java Script",
    href: "/js"
  },
  {
    title: "About",
    href: "/about"
  }
];

const reset = {
  padding: 0,
  margin: 0
}
const wrapper = {
  padding: 0,
  margin: 0,
  backgroundColor: "#f1f1f1"
}
const card = {
  backgroundColor: "#ffffff",
  borderRadius: 4,
  WebkitBorderRadius: 4,
  MozBorderRadius: 4,
  paddingTop: 10,
  paddingBottom: 40,
  paddingLeft: 40,
  paddingRight: 40,
  marginBottom: 50
}
export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid" style={wrapper}>
        <div className="row">
          <div className="col-xs-12 hidden-xs">
            <Nav navData={navLinks}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-1">
            <WeatherApp />
          </div>
          <div className="col-sm-6 hidden-xs" style={card}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

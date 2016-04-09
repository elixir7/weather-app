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
  paddingBottom: 20,
  margin: 0,
  backgroundColor: "#f1f1f1"
}
const card = {
  backgroundColor: "#ffffff",
  borderRadius: 4,
  WebkitBorderRadius: 4,
  MozBorderRadius: 4,
  paddingTop: 10,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  marginBottom: 50
}
export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid" style={wrapper}>
        <div className="row">
          <div className="col-xs-12">
            <Nav navData={navLinks}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-4">
            <WeatherApp />
          </div>
          <div className="col-md-6 hidden-xs" style={card}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

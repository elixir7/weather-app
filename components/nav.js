import React from 'react';
import { Link } from 'react-router'

import NavItem from './navitem'


var navStyle = {
  paddingLeft: 10,
  WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
  MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
  boxShadow: "0 0 4px rgba(0,0,0,0.4)",
  border: "none",
  borderRadius: 0,
  backgroundColor: "#ffffff"
};


export default class Nav extends React.Component {

  render() {

    var navItems = this.props.navData.map(function(item, key){
      return <NavItem
        key={item.title + key}
        title={item.title}
        href={item.href}
        />
    });

    return (
      <nav className="navbar navbar-default" style={navStyle}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Weather & Stuff</Link>

          </div>
          <div className="collapse navbar-collapse navbar-right" id="nav-collapse">
            <ul className="nav navbar-nav">
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

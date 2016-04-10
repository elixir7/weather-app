//This is the Navbar which contains navitems
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
            <Link to="/" className="navbar-brand">Weather & Stuff</Link>

          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

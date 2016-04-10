//This is navitem that creates a link to the corresponding page on the site
import React from 'react';
import { Link } from 'react-router'

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(){
    this.setState({hover: true})
  }

  mouseOut(){
    this.setState({hover: false})
  }

  render() {
    return (
      <li className={this.state.hover ? "active" : ""}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}>
        <Link to={this.props.href} >
          {this.props.title}
        </Link>
      </li>
    );
  }
}


module.exports = NavItem;

import React from 'react'
import Button from './button'

import Img from '../client/images/isak.jpg'

const img = {
  width: '100%'
}

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>I am Isak</h2>
        <div className="row">
          <div className="col-xs-3">
            <img src={Img} style={img} />
          </div>
          <div className="col-xs-9">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <h4><b>Web Development</b></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button style={Button} className="text-uppercase">Youtube</button>

        <h4><b>Building Stuff</b></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <button style={Button} className="text-uppercase">GitHub</button>
      </div>
    );
  }
}

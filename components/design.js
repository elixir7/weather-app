import React from 'react'
import Card from './Card'

import Morning from '../client/images/morning.jpg'
import Day from '../client/images/day.jpg'
import Night from '../client/images/night.jpg'

export default class Design extends React.Component {
  render() {
    return (
      <div>
        <h2>The Design</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <div className="row">
        <Card src={Morning} title="Morning" link="https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds/attachments/414100"/>
        <Card src={Day} title="Day"
          link="https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds/attachments/414101"/>
        <Card src={Night} title="Night"
          link="https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds/attachments/414102"/>
      </div>

      </div>
    );
  }
}

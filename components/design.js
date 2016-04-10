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

        <p>I decided i wanted to do the web app with an interesting design and challenge myself to work with a design. I did some searching over at <a href="https://dribbble.com/search?q=weather+app" target="_blank">dribble.com</a> and found some interesting designs. After deciding which one I liked the most i contacted the <a href="https://dribbble.com/Marina_Matijaca" target="_blank">creator</a>. I asked if I could use her designs in my app. She said that I could use them and gave me the source files. I tweaked the deign a little bit to fit what I was going to create. Big thanks to Marina for letting me use her work!</p>

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

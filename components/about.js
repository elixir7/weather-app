//This is the about page
import React from 'react'
import Button from './button'

import Img from '../client/images/isak.jpg'

const img = {
  width: '100%',
  borderRadius: 3
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
            <blockquote>
              <p>"Big" is the word that will change the world to a better place.</p>
              <footer>Isak Åslund, student at <cite title="Source Title">IT-Gymnasiet Göteborg</cite></footer>
            </blockquote>
          </div>
        </div>

        <h4>Web Development</h4>
        <p>Where do I start?? I LOVE web development! Web apps and web development in general is moving so fast that is hard to keep up. Everyday there are new libraries and technologies that try to improve web development and that's why I like it so much. I try to code everyday but sometimes life comes in between.
        I am very interested in of Java Script and the future of Java Script. My favourite tools and programs are Atom, iTerm 2, Node.js, React.js, Babel, Webpack. I use a MacBook Pro 2015 to develop on.</p>
        <a className="text-uppercase" href="https://github.com/elixir7" target="_blank" style={Button}>Github</a>

        <h4>Building Stuff</h4>
        <p>I also love creating things with my hands. I try to create things with arduinos usually with Java Script. I recently built a electric longboard that is controlled by a Wii Nunchuck. Check out the teaser video down below ;)</p>
        <a className="text-uppercase" href="https://www.youtube.com/watch?v=zrnrW4HVnzg" target="_blank" style={Button}>Youtube</a>
      </div>
    );
  }
}

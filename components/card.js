//This is a card which displays a picture, the picture name and the creator 
import React from 'react';

const author = {
  cursor: 'pointer',
  color: '#999999'
}

const title = {
  cursor: 'pointer'
}

const stringBorderRadius = "2px 2px 0px 0px";
const img = {
  cursor: "hand",
  width: "100%",
  borderRadius: stringBorderRadius,
  WebkitBorderRadius: stringBorderRadius,
  MozBorderRadius: stringBorderRadius,
}

const borderRadius = 2;
const card = {
  boxShadow: "3px 3px 3px 1px rgba(0, 0, 0, 0.1)",
  borderRadius: borderRadius,
  WebkitBorderRadius: borderRadius,
  MozBorderRadius: borderRadius,
}

const textBox = {
  paddingLeft: 10,
  paddingBottom: 5
}

const transition = "0.1s ease-in-out"
const hoverCardTrue = {
  transform: "scale(1.03, 1.03)",
  transition: transition,
  WebkitTransition: transition,
  MozTransition: transition
}
const hoverCardFalse ={
  transition: transition,
  WebkitTransition: transition,
  MozTransition: transition
}
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  mouseOver(){
    this.setState({hover: true})
  }

  mouseOut(){
    this.setState({hover: false})
  }

  onClick(e){
    console.log(e.target.value);
    let link;
    if(e.target.value === "Marina"){
      link = 'http://labofmischiefs.com/'
    }else {
      link = 'https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds'
    }
    var win = window.open(link, '_blank');
    if(win){
        //Browser has allowed it to be opened
        win.focus();
    }else{
        //Broswer has blocked it
        alert('Please allow popups for this site');
    }
  }

  render() {
    return (
        <div className="col-xs-4"
             onMouseOver={this.mouseOver}
             onMouseOut={this.mouseOut}
             style={this.state.hover ? hoverCardTrue : hoverCardFalse}>
          <div style={card}>
            <img onClick={this.onClick} src={this.props.src} style={img} />
            <div style={textBox}>
              <h5 onClick={this.onClick} style={title}>{this.props.title}</h5>
              <p onClick={this.onClick} value="Marina" style={author}>by Marina Matijaca</p>
            </div>
          </div>
        </div>
    );
  }
}

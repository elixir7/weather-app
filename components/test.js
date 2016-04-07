import React, { Component } from 'react'

export default class Test extends Component {
  evalUnit(unit){
    if(unit === 'metric'){
      return 'C'
    }else{
      return 'F'
    }
  }
  render(){
    return(
      <div>
        <h1>Stad {this.props.city}</h1>
        <p>{Math.round(this.props.temp) + '°' + this.evalUnit(this.props.unit)}</p>
      </div>
    );
  }
}

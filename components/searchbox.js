import React from 'react';

var searchBorder = {
  borderRadius: 50,
  border: "2px solid rgba(0, 0, 0, 0.2)",
  padding: 10,
  paddingLeft: 20
};
var searchIconBorder = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderRadius: 50,
  border: "2px solid rgba(0, 0, 0, 0.2)",
  width: 46,
  height: 46,
  cursor: "pointer"
}
var inputStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  width: "100%",
  color: "#ffffff"
};
var searchIcon = {
  fontSize: 14,
  color: "#ffffff"
}
var wrapper = {
  paddingTop: 20,
  paddingBottom: 10,
  paddingRight: 15,
  paddingLeft: 15
}

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({input: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.props.search(this.state.input)
    this.setState({input: ''})
  }

  render() {
    return (
      <div style={wrapper}>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="col-xs-9">
              <div style={searchBorder}>
                <input onChange={this.onChange} value={this.state.input} style={inputStyle} placeholder="Search" />
              </div>
            </div>
            <div className="col-xs-3">
              <button style={searchIconBorder}>
                <i className="fa fa-search" style={searchIcon} />
              </button>
            </div>
          </form>
        </div>
      </div>



    );
  }
}

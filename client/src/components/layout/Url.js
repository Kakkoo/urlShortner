import React, { Component } from "react";
import { connect } from "react-redux";
import {giveshorturl} from "../../actions/authActions";
const shorturl =  window.location.pathname;
console.log(`clientshorturl + ${shorturl}`);
class Url extends Component {
  constructor() {
    super();
    this.state = {
     shorturl: shorturl,
      
      //shorturl: window.location.href
    };
    this.onload = this.onload.bind(this);
  }
  onload(e) {
    e.preventDefault();
    const shorturl = {
      shorturl: this.state.shorturl 
    };
    this.props.giveshorturl(shorturl);
  }
  render() {
  console.log(shorturl);
   
    return (
      <div>
        <div onLoad={this.props.giveshorturl(shorturl)}></div>
        <div id="fullurl"></div>
        <div>"Wait for right url"</div>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  //errors: state.errors,
  auth: state.auth,
});
export default connect(mapStateToProps, {giveshorturl})(Url);

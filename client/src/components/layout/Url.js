import React, { Component } from "react";
//import classnames from "classnames";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import {giveshorturl} from "../../actions/authActions";
//import { Link } from "react-router-dom";
const shorturl =  window.location.pathname;
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

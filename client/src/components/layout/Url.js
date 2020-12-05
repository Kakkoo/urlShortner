import React, { Component } from "react";
import { connect } from "react-redux";
import {giveshorturl} from "../../actions/authActions";
class Url extends Component {
  constructor() {
    super();
    this.state = {
     shorturl: this.props.location.pathname,
    };
  }
   onload(e) {
     e.preventDefault();
     const shorturl = {
       shorturl: this.state.shorturl, 
     };
    this.props.giveshorturl(shorturl);
   }
  render() {
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

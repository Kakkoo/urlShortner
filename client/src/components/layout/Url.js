import React, { Component } from "react";
import { connect } from "react-redux";
import { giveshorturl } from "../../actions/authActions";
//const  shorturl  = this.props.match.params;
class Url extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     shorturl: this.props.match.params,
  //   };
  // }
  onLoad = function() {
    //  e.preventDefault();
    // const shorturl = {
    //   shorturl: this.props.match.params,
    // };
     const  shorturl  = this.props.match.params;
    this.props.giveshorturl(shorturl);
  }
  render() {
    const { shorturl } = this.props.match.params;

    return (
      <div>
        <h1>User id is {shorturl}</h1>
        <div id="fullurl"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //errors: state.errors,
  //auth: state.auth,
});
export default connect(mapStateToProps, { giveshorturl })(Url);

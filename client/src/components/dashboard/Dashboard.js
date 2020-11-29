import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {givefullurl} from "../../actions/authActions";
import {givenshorturl} from "../../actions/authActions";

class Fullurl extends Component {
  constructor() {
    super();
    //Local state
    this.state = {
      shorturl: "",
      fullurl: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const fullurl = {
      fullurl: this.state.fullurl,
    };

    this.props.givefullurl(fullurl);
  }
  onSubmit2(e) {
    e.preventDefault();
    const shorturl = {
      shorturl: this.state.shorturl,
    };

    this.props.givenshorturl(shorturl);
  }
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="url">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Too Big, make it short</h1>
              <p className="lead text-center">Enter fullurl</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="String"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fullurl,
                    })}
                    placeholder="fullurl"
                    name="fullurl"
                    value={this.state.fullurl}
                    onChange={this.onChange}
                  />
                  {errors.fullurl && (
                    <div className="invalid-feedback">{errors.fullurl}</div>
                  )}
                </div>
                {/* <div id="shorturl"></div> */}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <form noValidate onSubmit2={this.onSubmit}>
                <div className="form-group">
                  <div
                    id="shorturl"
                    type="String"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.shorturl,
                    })}
                    name="shorturl"
                  ></div>
                  {errors.fullurl && (
                    <div className="invalid-feedback">{errors.fullurl}</div>
                  )}
                </div>
                <div id = "fullurl"></div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Fullurl.propTypes = {
//   givefullurl: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { givefullurl }, {givenshorturl})(Fullurl);

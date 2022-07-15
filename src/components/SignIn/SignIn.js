import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignIn(e) {
    e.preventDefault();
    if (this.state.password !== this.state.rePassword) {
      alert("password error");
    } else {
      axios
        .post("http://localhost:4000/signin", { SignInData: this.state })
        .then(function (response) {
          console.log(response.data);
          if (!response.data.succes) alert(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          <div id="signIn-body">
            <div id="sign-in-container">
              <h1>SIGN IN HERE</h1>

              <div id="form-input-container">
                <p>Email Address</p>
                <input onChange={this.handleChange} required type="email" placeholder="" name="email" />
                <p>Password</p> <input onChange={this.handleChange} required type="password" placeholder="" name="password" />
                <p>
                  Forget Password?{" "}
                  <Link style={{ color: "cyan" }} to="/resetpass">
                    Reset Password
                  </Link>
                </p>
                <p>
                  Demo Dashboard{" "}
                  <Link style={{ color: "cyan" }} to="/dashboard">
                    Here
                  </Link>
                </p>
                <br></br>
              </div>
              <button id="signin-btn">
                <Link to="/error">Sign In</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

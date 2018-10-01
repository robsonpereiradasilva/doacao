import React, { Component } from "react";

import logo from "../logo.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Login" />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
              />
            </div>
            <div className="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

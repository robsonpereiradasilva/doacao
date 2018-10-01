import React, { Component } from "react";

import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="container">
          <div style={{marginTop:"10px"}}>
            <h1 className="App-title" style={{textAlign:"center",marginTop:"10"}}>Doações em urgência</h1>
          </div>
          <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header bg-primary text-white">
              <span> Tipo Sangüineo </span>
 
            </div>
            <div className="card-body">
              <p>Cidade</p>
              <p>Data</p>
            </div>
          </div>

            <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header bg-primary text-white">
            <span> Tipo Sangüineo </span>
            </div>
            <div className="card-body">
              <p>Cidade</p>
              <p>Data</p>
            </div>
          </div>

            <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header bg-primary text-white">
            <span> Tipo Sangüineo </span>
            </div>
            <div className="card-body">
              <p>Cidade</p>
              <p>Data</p>
            </div>
          </div>

            <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header bg-primary text-white">
            <span> Tipo Sangüineo </span>
            </div>
            <div className="card-body">
              <p>Cidade</p>
              <p>Data</p>
            </div>
          </div>
          
          <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header bg-primary text-white">
            <span> Tipo Sangüineo </span>
            </div>
            <div className="card-body">
              <p>Cidade</p>
              <p>Data</p>
            </div>
          </div>
        </div>
     
    );
  }
}

export default Home;

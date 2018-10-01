import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
 
 

import Home from './components/home';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Urgencia from './components/urgencia';
import Pesquisar from './components/pesquisar';

class App extends Component {
  render() {
    return (
     <Router> 
      <div>
        <Route exact path="/" component={Home} />        
        <Route exact path="/login" component={Login} />      
        <Route exact path="/cadastro" component={Cadastro} />      
        <Route exact path="/urgencia" component={Urgencia} />      
        <Route exact path="/pesquisar" component={Pesquisar} />   
     
      </div>
    </Router>
    );
  }
}

export default App;

import React, { Component } from "react";

class Pesquisar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "10px" }}>
          <h5>Pesquisar:</h5>
        </div>
        <form className="search">
          <input type="text" name="" id="" />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
        <div className="card" style={{ marginTop: "40px" }}>
          <div className="card-header bg-primary text-white">
            <span> Doador: </span>
          </div>
          <div className="card-body">
            <p>Tipo</p>
            <p>Telefone</p>
            <p>Cidade</p>
            <p>Idade</p>
            <p>Ultima doação:</p>
          </div>
        </div>

         <div className="card" style={{ marginTop: "40px" }}>
          <div className="card-header bg-primary text-white">
            <span> Doador: </span>
          </div>
          <div className="card-body">
            <p>Tipo</p>
            <p>Telefone</p>
            <p>Cidade</p>
            <p>Idade</p>
            <p>Ultima doação:</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pesquisar;

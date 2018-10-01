import React, { Component } from "react";

class Cadastro extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="text-center"
          style={{ height: "50px", marginTop: "20px" }}
        >
          <h4>Deixe-nos lhe conhecer</h4>
        </div>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              name="nome"
              className="form-control no-border"
              placeholder="Nome completo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="CPF"
              className="form-control no-border"
              placeholder="Cpf"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control no-border"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fone"
              className="form-control no-border"
              placeholder="Telefone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="nascimento"
              className="form-control no-border"
              placeholder="Data de Nascimento"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="tipo"
              className="form-control no-border"
              placeholder="Tipo Sanguíneo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="cidade"
              className="form-control no-border"
              placeholder="Cidade"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="senha"
              className="form-control no-border"
              placeholder="Senha"
            />
          </div>

          <div className="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Cadastro;

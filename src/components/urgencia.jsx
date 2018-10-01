import React, { Component } from "react";

class Urgencia extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="text-center"
          style={{ height: "50px", marginTop: "20px" }}
        >
          <h4>Cadastrar Urgência</h4>
        </div>
        <form action="">
          <label htmlFor="Data">Data</label>
          <div className="form-group">
            <input type="text" name="Data" className="form-control no-border" />
          </div>
          <label htmlFor="tipo">Tipo Sangüineo</label>
          <div className="form-group">
            <input type="text" name="tipo" className="form-control no-border" />
          </div>

          <label htmlFor="cidade">Cidade</label>
          <div className="form-group">
            <input
              type="text"
              name="cidade"
              className="form-control no-border"
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

export default Urgencia;

import React, { Component } from 'react';
import './meu-componente.scss';

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      resultado: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const num1 = parseInt(this.state.num1, 10);
    const num2 = parseInt(this.state.num2, 10);
    this.setState({ resultado: num1 + num2 });
  };

  render() {
    return (
      <div className="meu-componente">
        <form className="meu-componente__form" onSubmit={this.handleSubmit}>
          <h1>Calculadora de somas</h1>
          <label className="meu-componente__campo">
            
            <input type="text" name="num1" onChange={this.handleChange} />
          </label>
          <label className="meu-componente__campo">
            
            <input type="text" name="num2" onChange={this.handleChange} />
          </label>
          <button className="meu-componente__botao" type="submit">
            +
          </button>
        </form>
        <p className="meu-componente__resultado">Resultado: {this.state.resultado}</p>
      </div>
    );
  }
}

export default MeuComponente;


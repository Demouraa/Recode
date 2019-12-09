import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nomeI,
      cont: 0
    }
  }

  mudarNome = () => {
    if (this.state.cont === 0){
      this.setState({ nome: this.props.nomeF });
      this.setState({cont: 1});
    } else if(this.state.cont === 1) {
      this.setState({ nome: this.props.nomeI });
      this.setState({cont: 0});
    }
  }
  render() {
    return (
      <div>
        <p>Nome: {this.state.nome} </p>
        <button onClick={this.mudarNome}> Alterar </button>
     </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Conteudo nomeI = "joão" nomeF = "Ribeiro" />
        <Conteudo nomeI = "Ana" nomeF = "Catarina" />
        <Conteudo nomeI = "Carlos" nomeF = "Antonio" />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
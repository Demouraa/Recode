import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Titulo extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.titulo} </h1>
      </div>
    );
  }
}

class Conteudo extends Component {
  render() {
    return (
      <p> <b> {this.props.nome}:</b> {this.props.conteudo}  </p>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      cont: 0,
      ling: [
      {bot: ['English', 'Português']},
      {title: ['Desenvolvedor FullStack', 'FullStack-Developer']},
      {obj: ['Objetivo', 'Objective']},
      {conte: [
        'Aprender tecnologias incríveis para construir coisas magnificas.', 
        'Learn amazing technologies to build great things.'
      ]},
      {obj2: ['Tecnologias aprendidas', 'Technologies learned']},
      {conte2: [
        'JavaScript, React, TypeScript, Angular, Python, NodeJS entre outras.', 
        'JavaScript, React, TypeScript, Angular, Python, NodeJS and more.']}
      ]
    };
  }

  mudarIdioma = () => {
    if (this.state.cont === 0) {
      this.setState({cont: 1})
    } else if (this.state.cont === 1){
      this.setState({cont: 0})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.mudarIdioma}> {this.state.ling[0].bot[this.state.cont]} </button>
        <Titulo titulo={this.state.ling[1].title[this.state.cont]} />
        <Conteudo nome={this.state.ling[2].obj[this.state.cont]} conteudo={this.state.ling[3].conte[this.state.cont]} />
        <Conteudo nome={this.state.ling[4].obj2[this.state.cont]} conteudo={this.state.ling[5].conte2[this.state.cont]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
//import logo from './logo.svg';
//import './App.css';
import React, {Component} from 'react';
import Buscador from './componentes/Buscador';

/*function App() {
  return (
    <div className="App">
      <h1>Buscador de Noticias</h1>
      <Buscador
          mensaje = "Buscar..."  
      />
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> }

    </div>
  );
}*/

class App extends Component{
state = {
  termino : ''
}
  consultarApi=()=>{
    const url = 'https://newsapi.org/v2/everything?=${this.state.termino}';
  }

  datosBusqueda=(termino)=>{
    this.setState(
      {termino}
      ),() =>{
        this.consultarApi();
      }

  }
render(){
  return(
  <div className="app container">
    <div className = "jumbotron">
      <p className = "lead text-center">Buscador de Noticias</p>
      <Buscador
            datosBusqueda ={this.datosBusqueda}
      /> 

    </div>
  </div>

);
}

}

export default App;

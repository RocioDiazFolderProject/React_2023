//import logo from './logo.svg';
//import './App.css';

import React, {Component} from 'react';
import Footer from './componentes/Footer';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{
state = {
  termino : '',
  noticias : [],
  pagina : ''
}

scroll = () => {
  const elemento = document.querySelector('.jumbotron');
  elemento.scrollIntoView('smooth', 'start')
}

paginaAnterior = () => {
    // Leer el state de la página actual
    let pagina = this.state.pagina;
    // Si la página es 1, no volver hacia atrás
    if (pagina === 1) return null;
    // Sumar 1 a la pagina actual
    pagina -= 1;
    // Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    
    //console.log(pagina);
}

paginaSiguiente = () => {
  // Leer el state de la página actual
  let pagina = this.state.pagina;
  // Sumar 1 a la pagina actual
  pagina += 1;
  // Agregar el cambio al state
  this.setState({
    pagina
  }, () => {
    this.consultarApi();
    this.scroll();
  });

  //console.log(pagina); 
}
  consultarApi = () => {  
    //const url = `https://pixabay.com/api/?key=${this.state.termino}`;

    //const url = `https://newsapi.org/v2/everything?q=${this.state.termino}&sortBy=publishedAt&apiKey=46439605acf144eca83f6e1e0e26772e`;
    const pagina = this.state.pagina;

    const url = `https://newsapi.org/v2/everything?q=${this.state.termino}&apiKey=46439605acf144eca83f6e1e0e26772e&page=${pagina}&pageSize=10&language=es`;
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => this.setState({ noticias : resultado.articles}) )
  }

  datosBusqueda=(termino)=>{
    // console.log(termino);
    this.setState(
      {termino : termino,
        pagina : 1
      },() => {
        this.consultarApi();
      }) 
  }
render(){
  return(
    <div className="app container">
      <div className = "jumbotron">
        <p className = "lead text-center">Buscador de Noticias</p>
        <Buscador
              datosBusqueda = {this.datosBusqueda}
        />
      </div>
      <div className="row text-center">
          <Resultado 
            noticias = {this.state.noticias}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
      </div>
      <Footer />
    </div>
  );
}

}

export default App;

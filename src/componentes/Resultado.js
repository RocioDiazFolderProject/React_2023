import React, { Component } from "react";
import Noticia from "./Noticia";
import Paginacion from "./Paginacion";

class Resultado extends Component{
    mostrarNoticias = () => {
        const noticias = this.props.noticias;
        
        // Si está vacío, que no haga nada
        if(noticias.length === 0) return null;

        console.log(this.props.noticias);

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {noticias.map(noticia => (
                        <Noticia
                            key={noticia.description}
                            noticia={noticia}
                        />
                    ))}                    
                </div>
                <Paginacion 
                    paginaAnterior = {this.props.paginaAnterior}
                    paginaSiguiente = {this.props.paginaSiguiente}                
                />
            </React.Fragment>
        )
        
        
    }
    render() {
        return(
            <React.Fragment>
                {this.mostrarNoticias()}
            </React.Fragment>
            //<p>desde resultado.js</p>
            
        );
    }

}

export default Resultado;
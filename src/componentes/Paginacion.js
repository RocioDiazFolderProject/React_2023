import React, { Component } from "react";

const Paginacion = props => {
    return(
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info me-1">&larr; Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion; 
import React, { Component } from "react";

const Noticia = (props) => {

    const {urlToImage, title, content, author, url, publishedAt} = props.noticia;

    // const formatearFecha = () => {
    //     const fecha = DateTime.fromISO(articulo.publishedAt)
    //         .setLocale('system')
    //         .toFormat("dd-LL-yyyy 'a las' T 'hs.'");
    //     return fecha;
    // }
    
    return(
        <a href={url} target="_blank">            
            <div className="card mb-3">
                { <div className="row g-0">                
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <p className="card-text"><small className="text-muted">Publicado: {publishedAt} - Por {author}</small></p>
                    </div>
                    </div>
                    <div className="col-md-4">                    
                        <img src={urlToImage} className="w-auto h-100 p-2 img-fluid" alt={title}></img> 
                    </div>
                </div> }
            </div>
        </a>
    )
}

export default Noticia;
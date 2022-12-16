import React, { Component } from "react";

const Noticia = (props) => {

    const {urlToImage, title, content, author, url} = props.noticia;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <a href={url}>
                    <img src={urlToImage} alt={title} className="card-img-top"></img>
                </a>
                <div className="card-body">
                    <p className="card-text fw-bolder">{title}</p>
                    <p className="card-text">{content}</p>
                    <p className="card-text fst-italic">{author}</p>
                </div>
            </div>

        </div>
    )
}

export default Noticia;
import React from "react";

 
function Blogs(props){
    return(
        <div className="mt-5">
            <div>
                <span className="seccionBlog">
                      {props.seccion}  >
                </span>
            </div>
            <div className="seccionBlog2 mt-4">
                <div className="blogs">
                  <img  src={props.foto1}  width="100%"/>
                  <h2>
                      {props.titulo1}
                  </h2>
                  <p className="extracto">
                      {props.extracto}
                  </p>
                  <span>{props.fecha}</span><br/>
                  <span>{props.nombre}</span>
                </div>

                <div className="blogs">
                <img  src={props.foto2}  width="100%"/>
                  <h2>
                    {props.titulo2}
                  </h2>
                  <p className="extracto">
                   {props.extracto2}
                  </p>
                   <span>{props.fecha}</span><br/>
                   <span>{props.nombre}</span>
                </div>

                <div className="blogs">
                <img src={props.foto3}  width="100%"/>
                  <h2>
                    {props.titulo3}
                  </h2>
                  <p className="extracto">
                    {props.extracto3}
                  </p>
                  <span>{props.fecha}</span><br/>
                  <span>{props.nombre}</span>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
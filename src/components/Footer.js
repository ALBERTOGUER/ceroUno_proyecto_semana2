import React from 'react';

function Footer(){
    return(
        <div>
            <footer>
                <h1>Suscribete ahora y enterate de todas las noticias de hoy</h1>
                <div className="form-group " id="div_formgroup">
                  
                  <input type="text"className="form-control button" name="" id="" aria-describedby="helpId" placeholder=""/>
                  
                   <button type="button" name="" id="button" className="btn btn-primary  ">Suscribe</button>
                </div>

                <div><h5 id="texto"></h5></div>
            </footer>
        </div>
    );
}

export default Footer;
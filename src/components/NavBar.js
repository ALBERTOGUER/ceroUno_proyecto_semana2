import React from 'react';


function NavBar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="nav">
              <a className="navbar-brand" ><img src={props.img}  height="42" width="42"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                         <a className="nav-link" >Servicios <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                          <a className="nav-link">Acerca de</a>
                     </li>
                     
                     <li className="nav-item">
                          <a className="nav-link "  aria-disabled="true">Contacto</a>
                     </li>
                   </ul>
                   
             </div>
            </nav>
        </div>
    );
}


export default NavBar;
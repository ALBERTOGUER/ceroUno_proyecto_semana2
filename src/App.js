import React from 'react';
import NavBar from './components/NavBar';
import ball from './components/img/logo.png';
import Principal from "./components/Principal";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

import foto2 from "./components/img/briseño.jpg"
import foto1 from "./components/img/neymar.jpg"
import foto3 from "./components/img/playera.jpg"
import foto4 from "./components/img/shanahan.jpg"
import foto5 from "./components/img/g.jpg"
import foto6 from "./components/img/i.jpg"
import foto7 from "./components/img/lebron.jpg"
import foto8 from "./components/img/kobe.jpg"
import foto9 from "./components/img/star.jpg"

/* https://i.dlpng.com/static/png/1306233-soccer-png-soccer-png-480_480_preview.png */
import './App.css';




// When the user scrolls down 20px from the top of the document, show the button

function App() {
  return (
    <div>
    <NavBar img={ball} />
    <div id="content" className="container ">
      <div className="sections "><Principal /></div>
      <div className="sections mt-5" id="seccion2">

       <Blogs seccion="Soccer" titulo1="Neymar sorprende 'Va a ser el mejor del mundo'" extracto="'Ve muy pronta su consolidación'Neymar lo considera como uno de los mejores futbolistas y cree que en poco tiempo será el mejor del mundo" fecha="06/02/2020" nombre="Alberto Jorge Pérez Yáñez" titulo2="Briseño: 'Tigres es equipo de la década, Chivas es el grande de México'" extracto2="Antonio Briseño se presentó en conferencia de prensa para dialogar sobre el partido que tendrá Chivas ante los Tigres.  " titulo3="Nike presentó la camiseta de Nigeria" extracto3="La nueva camiseta de Nigeria causa sensación en redes sociales." foto1={foto1} foto2={foto2} foto3={foto3}/>

       <Blogs seccion="Futbol americano" titulo1="Kyle Shanahan no se arrepiente de sus jugadas en el Super Bowl LIV" extracto="El head coach de los San Francisco 49ers, Kyle Shanahan, no usa redes sociales, pero luego de la decepcionante derrota de su equipo en el Super Bowl LIV, posee un método diferente para medir las críticas que se lanzaron en su contra y contra el equipo: mensajes de texto." titulo2="49ers lamentan sus oportunidades perdidas ante Chiefs" extracto2="En lugar de celebrar su sexto triunfo en el Super Bowl, con lo que hubieran igualado la mejor marca de la historia, los Niners pasaron el día vaciando sus casilleros" titulo3="Predicciones de temporada baja para los 32 equipos de la NFL" extracto3="El Super Bowl ha quedado atrás, y ahora la intriga real comienza para los 32 clubes de la NFL con el inicio del receso de temporada." foto1={foto4} foto2={foto5} foto3={foto6} fecha="06/02/2020" nombre="Alberto Jorge Pérez Yáñez" />

       <Blogs seccion="Basketball" titulo1="LeBron suma a su colección épica de imágenes icónicas con clavada" extracto="LeBron James logró una clavada inversa de dos manos el jueves por la noche, entusiasmando a los fanáticos con otro momento electrizante en su 17ma temporada en la NBA" titulo2="No hay falla externa en motor de helicóptero donde falleció Bryant Kobe Bryant" extracto2="Los restos del helicóptero que se estrelló el mes pasado y mató a Kobe Bryant, su hija y otras siete personas, no mostraron evidencia externa de falla del motor, dijo el viernes la Junta Nacional de Seguridad del Transporte (NTSB, por sus siglas en inglés)." titulo3="LeBron James y Giannis Antetokounmpo eligieron sus equipos" extracto3="De cara al All-Star Weekend de la NBA que se llevará a cabo en el United Center de Chicago, los capitanes de ambas conferencias eligieron a sus titulares y reservas." foto1={foto7} foto2={foto8} foto3={foto9} fecha="06/02/2020" nombre="Alberto Jorge Pérez Yáñez" />

       
      </div>
    </div>
       <Footer />
   </div>
  );
}



export default App;

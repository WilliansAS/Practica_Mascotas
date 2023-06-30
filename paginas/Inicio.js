import React from 'react';
import Encabezado from "../componentes/Encabezado";


function Inicio(){
    // Metodo que regresa el HTML
    return(
        <>
      <Encabezado/>
      <div className="container">
    <h1>Bienvenidos a nuestro portal</h1>
      </div>
      </>
    );
}

// 4.
export default Inicio;
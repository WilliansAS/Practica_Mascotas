import React from 'react';
import Encabezado from "../componentes/Encabezado";
import Mascota from '../componentes/Mascotas';

function Categorias(){
    // Metodo que regresa el HTML
    return(
        <>
      <Encabezado/>
      <div className="container">
    <h1>Categorias</h1>
    <Mascota/>
      </div>
      </>
    );
}

// 4.
export default Categorias;
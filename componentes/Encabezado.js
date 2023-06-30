// 1. Importar React 
import React from 'react';

//Agregar los enlaces
import { Link } from 'react-router-dom';

// 2. Crear la funcion 
function Encabezado(){
    // Metodo que regresa el HTML
    return(
        <>
        <header>
            <h1>OntaMiMascota</h1>
        </header>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
        </>
    );
}

// 4. Exportamos
export default Encabezado;
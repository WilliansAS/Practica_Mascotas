import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mascota(){

    const[mascotas,setMascotas] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8082/obtenerMascotas')
        .then(respuesta => {
            if(respuesta.data.mensaje==='Exitoso'){
                setMascotas(respuesta.data.contenido);
                console.log(respuesta.data.contenido);
            }
        })
        .catch(error => console.log("ERROR AL RECUPERAR DATOS"));
    });

    return(
        <>

        { mascotas.map((lamascota,index)=>{
         return  <h1>{lamascota.nombre} tiene {lamascota.edad}</h1>
         
         
        })}

    </>  
    );
}

export default Mascota;
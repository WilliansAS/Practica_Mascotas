import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//CREAR LAS INSTANCIA DE EXPRESS
const app=express();
app.use(cors());

//CREAR LA CONEXION
const conexion=mysql.createConnection({
    server:'localhost',
    user:'root',
    password:'',
    database:'mascotitas'
});

//VERIFICAMOS LA CONEXION
conexion.connect(function(error){
    if(error){
        console.log("ERROR AL CONECTAR A LA BASE DE DATOS")
    }else{
        console.log("CONEXION EXITOSA");
    }
});

// CONSULTAR LA LISTA DE MASCOTAS
app.get('/obtenerMascotas',(peticion, respuesta)=>{
     const sql="select * from mascota";
     conexion.query(sql,(error,resultado)=>{
     if(error) return respuesta.json({mensaje:"error"});
     return respuesta.json({mensaje:"Exitoso",contenido:resultado});
});
});



//INICIAR SERVIDOR
app.listen(8082,() =>{
    console.log("Servidor iniciado");
})
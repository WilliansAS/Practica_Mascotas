import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';

//CREAR LAS INSTANCIA DE EXPRESS
const app=express();
app.use(express.json());
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

//Acceso a usuario
app.post('/acceso',(peticion,respuesta)=>{
     const sql="SELECT * FROM usuarios WHERE correo_electronico = ? AND contrasenia=?";
     console.log(peticion.body);
     conexion.query(sql,[peticion.body.correo_electronico,peticion.body.contrasenia],
    (error,resultado)=>{
     if(error) return respuesta.json({mensaje:"Error en la consulta"});
     if(resultado.length > 0){
         const token=jwt.sign({usuario:'administrador'},'123',{expiresIn:'1d'});
         respuesta.cookie(token);
         return respuesta.json({Estatus:"CORRECTO",Usuario:token})
     }else{
        return respuesta.json({Estatus:"ERROR",Error:"Usuario contraseña incorrecta"});
     }
     })
    });

//Registrar usuario
    app.post('/registro',(peticion,respuesta)=>{
        const sql="INSERT INTO usuarios(nombre_usuario,correo_electronico,contrasenia) VALUES(?,?,sha1(?))";
        console.log(peticion.body);
        conexion.query(sql,[peticion.body.nombre_usuario,peticion.body.correo_electronico,peticion.body.contrasenia],
       (error,resultado)=>{
        if(error) return respuesta.json({mensaje:"Error en la consulta"});
        return respuesta.json({Estatus:"CORRECTO"});
        })
       });
     


//INICIAR SERVIDOR
app.listen(8082,() =>{
    console.log("Servidor iniciado");
})
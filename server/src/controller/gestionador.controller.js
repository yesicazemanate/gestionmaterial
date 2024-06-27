import {hash}  from 'bcrypt'
import { createGestionadorQuery, obtenerGestionadorQuery,obtenerGestionadorQueryId,deleteGestionadorQuery ,loginGestionadorQuery} from "../query/gestionador.query.js";
 export const createGestionador=async(req,res)=>{
    const { Nombre, NumeroCedula, Correo,Cargo, Telefono,Contraseña,idAdministrador } = req.body;
    const hashedPassword = await hash(Contraseña, 8);
    const gestionadorData = {
        Nombre:Nombre,
        NumeroCedula:NumeroCedula,
        Correo:Correo,
        Cargo:Cargo,
        Telefono:Telefono,
        Contraseña:hashedPassword,
        idAdministrador:idAdministrador
        
    }
 try {
        const gestionadorId = await createGestionadorQuery("gestionador",gestionadorData);
        res.json({
            id:gestionadorId,
            mesage: 'gestionador creado exitosamente',
            gestionador:gestionadorData
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el gestionador' });
    }
}
export const loginGestionador=async(req,res)=>{
    const {Correo, Contraseña } = req.body;
 try {
        const gestionador = await loginGestionadorQuery("gestionador",Correo)
        if(!gestionador){
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
        const contraseñaValida = await verified(Contraseña, gestionador.Contraseña);
        if (!contraseñaValida) {
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
    
          const token = generateToken(Correo);
          console.log(token)
          res.json({
            message: 'Inicio de sesión exitoso',
            Token:token,
            gestionador,
            typoUser:"gestionador"

        })
    
    
    } catch (err) {
        console.error('Error en miControlador:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' },err);
    }}
export const obtenerGestionador=async(req,res)=>{
 try {
        const gestionadores = await obtenerGestionadorQuery("gestionador");
        res.json(gestionadores);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los gestionadores' });
    }
}
export const obtenerGestionadorId=async(req,res)=>{
    const{id}=req.params
    try {
           const gestionador = await obtenerGestionadorQueryId("gestionador",id);
           if(gestionador){
            res.json(gestionador)
        }else{
            res.status(400).json({error: 'gestionador no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al obtener el gestionador' });
       }
   }
   export const deleteGestionador=async(req,res)=>{
    const{id}=req.params
    try {
           const gestionador = await deleteGestionadorQuery("gestionador",id);
           if(gestionador>0){
            res.json({message:'Gestionador eliminado correctamente'})
        }else{
            res.status(400).json({error: 'gestionador no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al eliminar el gestionador' });
       }
   }

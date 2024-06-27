
import { createAdministradorQuery,obtenerAdministradorQuery,obtenerAdministradorQueryId, deleteAdministradorQuery, loginAdministradorQuery } from "../query/administrador.query.js";
import { encrypt, verified } from '../utils/bcrypt.js';
import { generateToken } from '../utils/jwt.js';
 
export const createAdministrador=async(req,res)=>{
    const { Nombre, NumeroCedula, Correo,Cargo, Telefono, Contraseña } = req.body;
    const hashedPassword = await encrypt(Contraseña)
    const administradorData = {
        Nombre:Nombre,
        NumeroCedula:NumeroCedula,
        Correo:Correo,
        Cargo:Cargo,
        Telefono:Telefono,
        Contraseña:hashedPassword
    }
 try {
        const administradorId = await createAdministradorQuery("administrador",administradorData);
        res.json({
            id: administradorId,
            message: 'Administrador creado exitosamente',
            administrador: administradorData
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el administrador' });
    }

}
export const loginAdministrador=async(req,res)=>{
    const {Correo, Contraseña } = req.body;
 try {
        const administrador = await loginAdministradorQuery("administrador",Correo)
        if(!administrador){
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
        const contraseñaValida = await verified(Contraseña, administrador.Contraseña);
        if (!contraseñaValida) {
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
    
          const token = generateToken(Correo);
          console.log(token)
          res.json({
            message: 'Inicio de sesión exitoso',
            Token:token,
            administrador,
            typoUser:"administrador"

        })
    
    
    } catch (err) {
        console.error('Error en miControlador:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' },err);
    }}
export const obtenerAdministrador=async(req,res)=>{
 try {
        const administradores = await obtenerAdministradorQuery("administrador");
        res.json(administradores);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los administradores' });
    }
}
export const obtenerAdministradorId=async(req,res)=>{
    const{id}=req.params
    try {
           const administrador = await obtenerAdministradorQueryId("administrador",id);
           if(administrador){
            res.json(administrador)
        }else{
            res.status(400).json({error: 'administrador no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al obtener el administrador' });
       }
   }
   export const deleteAdministrador=async(req,res)=>{
    const{id}=req.params
    try {
           const administrador = await deleteAdministradorQuery("administrador",id);
           if(administrador>0){
            res.json({message:'Administrador eliminado correctamente'})
        }else{
            res.status(400).json({error: 'administrador no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al eliminar el administrador' });
       }
   }

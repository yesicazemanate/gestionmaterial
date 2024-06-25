import { createAdministradorQuery,obtenerAdministradorQuery,obtenerAdministradorQueryId, deleteAdministradorQuery } from "../query/administrador.query.js";
 export const createAdministrador=async(req,res)=>{
    const { Nombre, NumeroCedula, Correo,Cargo, Telefono } = req.body;
    const administradorData = {
        Nombre:Nombre,
        NumeroCedula:NumeroCedula,
        Correo:Correo,
        Cargo:Cargo,
        Telefono:Telefono
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

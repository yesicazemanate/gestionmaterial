import { encrypt, verified } from '../utils/bcrypt.js';
import { generateToken } from '../utils/jwt.js';
import{createEstudianteQuery, obtenerEstudianteQuery, obtenerEstudianteQueryId,deleteEstudianteQuery, loginEstudianteQuery} from '../query/estudiante.query.js'
 export const createEstudiante=async (req,res)=>{
    const { Nombre, DocumentoIdentidad, NumeroDocumento, Institucion, Correo, Telefono,Contraseña } = req.body;
    const hashedPassword = await encrypt(Contraseña);
    const estudianteData = {
        Nombre:Nombre,
        DocumentoIdentidad:DocumentoIdentidad,
        NumeroDocumento:NumeroDocumento,
        Institucion:Institucion,
        Correo:Correo,
        Telefono:Telefono,
        Contraseña:hashedPassword
    }
 try {
        const estudianteId = await createEstudianteQuery("estudiante",estudianteData);
        res.json({
            id: estudianteId,
            message: 'Estudiante creado exitosamente',
            estudiante: estudianteData
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el estudiante' });
    }
}
export const loginEstudiante=async(req,res)=>{
    const {Correo, Contraseña } = req.body;
 try {
        const estudiante = await loginEstudianteQuery("estudiante",Correo)
        if(!estudiante){
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
        const contraseñaValida = await verified(Contraseña, estudiante.Contraseña);
        if (!contraseñaValida) {
            return res.send({message:'Usuario o contraseña incorrectos'})
        }
    
          const token = generateToken(Correo);
          console.log(token)
          res.json({
            message: 'Inicio de sesión exitoso',
            Token:token,
            estudiante,
            typoUser:"estudiante"

        })
    
    
    } catch (err) {
        console.error('Error en miControlador:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' },err);
    }}
export const obtenerEstudiante=async(req,res)=>{
 try {
        const estudiantes = await obtenerEstudianteQuery("estudiante");
        res.json(estudiantes);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
}
export const obtenerEstudianteId=async(req,res)=>{
    const{id}=req.params
    try {
           const estudiante = await obtenerEstudianteQueryId("estudiante",id);
           if(estudiante){
            res.json(estudiante)
        }else{
            res.status(400).json({error: 'estudiante no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al obtener el estudiante' });
       }
   }
   export const deleteEstudiante=async(req,res)=>{
    const{id}=req.params
    try {
           const estudiante = await deleteEstudianteQuery("estudiante",id);
           if(estudiante>0){
            res.json({message:'Estudiante eliminado correctamente'})
        }else{
            res.status(400).json({error: 'estudiante no encontrado'})
        }
       } catch (err) {
           res.status(500).json({ error: 'Error al eliminar el estudiante' });
       }
   }

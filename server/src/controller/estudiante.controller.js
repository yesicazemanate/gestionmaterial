import{createEstudianteQuery, obtenerEstudianteQuery, obtenerEstudianteQueryId,deleteEstudianteQuery} from '../query/estudiante.query.js'
 export const createEstudiante=async(req,res)=>{
    const { Nombre, DocumentoIdentidad, NumeroDocumento, Institucion, Correo, Telefono,Contraseña } = req.body;
    const estudianteData = {
        Nombre:Nombre,
        DocumentoIdentidad:DocumentoIdentidad,
        NumeroDocumento:NumeroDocumento,
        Institucion:Institucion,
        Correo:Correo,
        Telefono:Telefono,
        Contraseña:Contraseña
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

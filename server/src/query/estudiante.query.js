import db from '../config/database.js'

export const createEstudianteQuery =async(tableName, data)=>{
    const query =`INSERT INTO ${tableName} SET ?`
    try{
        const [estudiante] = await db.query(query, data)
        return estudiante.insertId
    }catch(err){
        throw err
    }
}
export const loginEstudianteQuery =async(tableName, Correo)=>{
    const query =`SELECT * FROM ${tableName} WHERE Correo = ?`
    try{
        const [estudiante] = await db.query(query, [Correo])
        return estudiante[0]
    }catch(err){
        throw err
    }
}
export const obtenerEstudianteQuery =async(tableName)=>{
    const query =`SELECT * FROM ${tableName}`
    try{
        const [estudiante] = await db.query(query)
        return estudiante
    }catch(err){
        throw err
    }
}
export const obtenerEstudianteQueryId =async(tableName, id)=>{
    const query =`SELECT * FROM ${tableName} WHERE ID = ?`
    try{
        const [estudiante]= await db.query(query, [id])
        return estudiante[0]
    }catch(err){
        throw err
    }
}
export const deleteEstudianteQuery=async(tableName, id)=>{
    const query =`DELETE FROM ${tableName} WHERE ID = ?`
    try{
        const [estudiante]= await db.query(query, [id])
        return estudiante.affectedRows
    }catch(err){
        throw err
    }
}
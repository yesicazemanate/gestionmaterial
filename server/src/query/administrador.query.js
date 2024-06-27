import db from '../config/database.js'

export const createAdministradorQuery =async(tableName, data)=>{
    const query =`INSERT INTO ${tableName} SET ?`
    try{
        const [administrador] = await db.query(query, data)
        return administrador.insertId
    }catch(err){
        throw err
    }
}
export const loginAdministradorQuery =async(tableName, Correo)=>{
    const query =`SELECT * FROM ${tableName} WHERE Correo = ?`
    try{
        const [administrador] = await db.query(query, [Correo])
        return administrador[0]
    }catch(err){
        throw err
    }
}
export const obtenerAdministradorQuery =async(tableName)=>{
    const query =`SELECT * FROM ${tableName}`
    try{
        const [administrador] = await db.query(query)
        return administrador
    }catch(err){
        throw err
    }
}
export const obtenerAdministradorQueryId =async(tableName, id)=>{
    const query =`SELECT * FROM ${tableName} WHERE ID = ?`
    try{
        const [administrador]= await db.query(query, [id])
        return administrador[0]
    }catch(err){
        throw err
    }
}
export const deleteAdministradorQuery=async(tableName, id)=>{
    const query =`DELETE FROM ${tableName} WHERE ID = ?`
    try{
        const [administrador]= await db.query(query, [id])
        return administrador.affectedRows
    }catch(err){
        throw err
    }
}
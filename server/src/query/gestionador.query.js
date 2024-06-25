import db from '../config/database.js'

export const createGestionadorQuery =async(tableName, data)=>{
    const query =`INSERT INTO ${tableName} SET ?`
    try{
        const [gestionador] = await db.query(query, data)
        return gestionador.insertId
    }catch(err){
        throw err
    }
}
export const obtenerGestionadorQuery =async(tableName)=>{
    const query =`SELECT * FROM ${tableName}`
    try{
        const [gestionador] = await db.query(query)
        return gestionador
    }catch(err){
        throw err
    }
}
export const obtenerGestionadorQueryId =async(tableName, id)=>{
    const query =`SELECT * FROM ${tableName} WHERE ID = ?`
    try{
        const [gestionador]= await db.query(query, [id])
        return gestionador[0]
    }catch(err){
        throw err
    }
}
export const deleteGestionadorQuery=async(tableName, id)=>{
    const query =`DELETE FROM ${tableName} WHERE ID = ?`
    try{
        const [gestionador]= await db.query(query, [id])
        return gestionador.affectedRows
    }catch(err){
        throw err
    }
}
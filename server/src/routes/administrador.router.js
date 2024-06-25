import express from 'express'
import { 
    createAdministrador,
obtenerAdministrador,
obtenerAdministradorId,
deleteAdministrador } from '../controller/administrador.controller.js'

const administradorRoute= express.Router()
administradorRoute.post('/', createAdministrador )
administradorRoute.get('/',obtenerAdministrador)
administradorRoute.get('/:id',obtenerAdministradorId)
administradorRoute.delete('/:id',deleteAdministrador)
export default administradorRoute;
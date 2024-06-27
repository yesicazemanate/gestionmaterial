import express from 'express'
import { 
    createAdministrador,
obtenerAdministrador,
obtenerAdministradorId,
deleteAdministrador,
loginAdministrador} from '../controller/administrador.controller.js'
import { checkjwt } from '../middleware/sesion.js'

const administradorRoute= express.Router()
administradorRoute.post('/', createAdministrador )
administradorRoute.post('/login', loginAdministrador )
administradorRoute.get('/',obtenerAdministrador)
administradorRoute.get('/:id',obtenerAdministradorId)
administradorRoute.delete('/:id',deleteAdministrador)
export default administradorRoute;
import express from 'express'
import { createGestionador,
    obtenerGestionador,
    obtenerGestionadorId,
    deleteGestionador,
    loginGestionador
 } from '../controller/gestionador.controller.js'
const gestionadorRoute= express.Router()
gestionadorRoute.post('/', createGestionador )
gestionadorRoute.post('/login', loginGestionador )
gestionadorRoute.get('/',obtenerGestionador)
gestionadorRoute.get('/:id',obtenerGestionadorId)
gestionadorRoute.delete('/:id',deleteGestionador)
export default gestionadorRoute;
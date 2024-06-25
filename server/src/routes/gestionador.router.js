import express from 'express'
import { createGestionador,
    obtenerGestionador,
    obtenerGestionadorId,
    deleteGestionador
 } from '../controller/gestionador.controller.js'
const gestionadorRoute= express.Router()
gestionadorRoute.post('/', createGestionador )
gestionadorRoute.get('/',obtenerGestionador)
gestionadorRoute.get('/:id',obtenerGestionadorId)
gestionadorRoute.delete('/:id',deleteGestionador)
export default gestionadorRoute;
import express from 'express'
import estudianteRouter from './estudiante.router.js'
import administradorRoute from './administrador.router.js'
import gestionadorRoute from './gestionador.router.js'
const router = express.Router()
router.use('/estudiante', estudianteRouter)
router.use('/administrador',administradorRoute)
router.use('/gestionador',gestionadorRoute)
export default router;
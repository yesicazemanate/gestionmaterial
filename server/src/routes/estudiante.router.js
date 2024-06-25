import express from 'express'
import{
    createEstudiante,
    obtenerEstudiante,
    obtenerEstudianteId,
    deleteEstudiante
}from '../controller/estudiante.controller.js'

const estudianteRouter= express.Router()
estudianteRouter.post('/', createEstudiante )
estudianteRouter.get('/',obtenerEstudiante)
estudianteRouter.get('/:id',obtenerEstudianteId)
estudianteRouter.delete('/:id',deleteEstudiante)
export default estudianteRouter;
import express from 'express'
import { getIndex, getDetails, getDeletar, getCriar, postCriar, getEditar, postEditar } from '../controller/FilmesController.js'



export const routes = express.Router()

routes.get('/', getIndex)

routes.get('/details/:id', getDetails)

routes.get('/deletar/:id', getDeletar)

routes.get('/criar', getCriar)

routes.post('/criar', postCriar)

routes.get('/editar/:id' , getEditar)

routes.post('/editar/:id' , postEditar)
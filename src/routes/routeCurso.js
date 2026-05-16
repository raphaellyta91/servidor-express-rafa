import express from 'express'

import {
  abrirCadastroCurso,
  cadastrarCurso,
  listarCursos,
  removerCurso
} from '../controllers/controllerCurso.js'

const router = express.Router()

router.get('/cadastro', abrirCadastroCurso)
router.post('/curso', cadastrarCurso)
router.get('/cursos', listarCursos)
router.get('/curso/remover/:idCurso', removerCurso)

export default router
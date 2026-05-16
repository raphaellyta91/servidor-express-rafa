import express from 'express'

import {
  abrirCadastroCurso,
  cadastrarCurso,
  listarCursos,
  removerCurso
} from '../controllers/controllerCurso.js'

import {
  abrirCadastroAluno,
  cadastrarAluno,
  listarAlunos,
  removerAluno
} from '../controllers/controllerAluno.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Página inicial</h1>')
})

// Cursos
router.get('/cadastro', abrirCadastroCurso)
router.post('/curso', cadastrarCurso)
router.get('/cursos', listarCursos)
router.get('/curso/remover/:idCurso', removerCurso)

// Alunos
router.get('/cadastro-aluno', abrirCadastroAluno)
router.post('/aluno', cadastrarAluno)
router.get('/alunos', listarAlunos)
router.get('/aluno/remover/:idAluno', removerAluno)

export default router
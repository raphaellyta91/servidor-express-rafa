import express from 'express'

import {
    abrirCadastroAluno,
    listarAlunos,
    cadastrarAluno
} from '../controllers/controllerAluno.js'

const routeAluno = express.Router()

routeAluno.get(
    '/cadastro-aluno',
    abrirCadastroAluno
)

routeAluno.get(
    '/alunos',
    listarAlunos
)

routeAluno.post(
    '/aluno',
    cadastrarAluno
)

export default routeAluno
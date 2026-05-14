import express from 'express'

import {
    criarCurso,
    listarCursos,
    buscarCurso,
    atualizarCurso,
    removerCurso,
    alterarCurso,
    cadastroCurso
} from '../controllers/controllerCurso.js'

const routeCurso = express.Router()

routeCurso.get(
    '/cadastro-curso',
    cadastroCurso
)

routeCurso.post(
    '/curso',
    criarCurso
)

routeCurso.get(
    '/cursos',
    listarCursos
)

routeCurso.get(
    '/curso/:curso',
    buscarCurso
)

routeCurso.put(
    '/curso/:cod',
    atualizarCurso
)

routeCurso.delete(
    '/curso/:cod',
    removerCurso
)

routeCurso.patch(
    '/curso/:cod',
    alterarCurso
)

export default routeCurso
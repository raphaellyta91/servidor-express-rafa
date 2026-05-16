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

// Página inicial
router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
      <meta charset="UTF-8">
      <title>Sistema</title>

      <style>

        body{
          font-family: Arial;
          padding: 40px;
        }

        h1{
          color: #333;
        }

        .menu{
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        a{
          text-decoration: none;
          background: #2563eb;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
        }

        a:hover{
          background: #1d4ed8;
        }

      </style>
    </head>

    <body>

      <h1>Sistema de Cursos e Alunos</h1>

      <div class="menu">

        <a href="/cadastro">
          Cadastrar Curso
        </a>

        <a href="/cursos">
          Listar Cursos
        </a>

        <a href="/cadastro-aluno">
          Cadastrar Aluno
        </a>

        <a href="/alunos">
          Listar Alunos
        </a>

      </div>

    </body>

    </html>
  `)
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
import path from 'path'
import {
  listarCursosBanco,
  cadastrarCursoBanco,
  removerCursoBanco
} from '../models/modelCurso.js'

export function abrirCadastroCurso(req, res) {
  res.sendFile(path.resolve('./src/views/cadastro.html'))
}

export async function cadastrarCurso(req, res) {
  try {
    const { cod, curso, ch, tipo } = req.body

    await cadastrarCursoBanco(cod, curso, ch, tipo)

    res.redirect('/cursos')
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}

export async function listarCursos(req, res) {
  try {
    const cursos = await listarCursosBanco()
    res.render('listarCursos', { cursos })
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}

export async function removerCurso(req, res) {
  try {
    const { idCurso } = req.params

    await removerCursoBanco(idCurso)

    res.redirect('/cursos')
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}
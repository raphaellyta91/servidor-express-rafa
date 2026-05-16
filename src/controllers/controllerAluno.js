import path from 'path'
import {
  listarAlunosBanco,
  cadastrarAlunoBanco,
  removerAlunoBanco
} from '../models/modelAluno.js'

export function abrirCadastroAluno(req, res) {
  res.sendFile(path.resolve('./src/views/aluno.html'))
}

export async function cadastrarAluno(req, res) {
  try {
    const { matricula, nome, telefone, email, curso } = req.body

    await cadastrarAlunoBanco(matricula, nome, telefone, email, curso)

    res.redirect('/alunos')
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}

export async function listarAlunos(req, res) {
  try {
    const alunos = await listarAlunosBanco()
    res.render('listarAlunos', { alunos })
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}

export async function removerAluno(req, res) {
  try {
    const { idAluno } = req.params

    await removerAlunoBanco(idAluno)

    res.redirect('/alunos')
  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: err.message })
  }
}
import path from 'path'
import { alunos } from '../models/modelAluno.js'

export const abrirCadastroAluno = (req, res) => {
    res.sendFile(path.resolve('./src/views/aluno.html'))
}

export const listarAlunos = (req, res) => {
    res.json(alunos)
}

export const cadastrarAluno = (req, res) => {
    const { matricula, nome, telefone, email, curso } = req.body

    const novoAluno = {
        matricula,
        nome,
        telefone,
        email,
        curso
    }

    alunos.push(novoAluno)

    res.json({
        mensagem: 'Aluno cadastrado com sucesso!',
        aluno: novoAluno
    })
}
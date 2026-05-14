import path from "path"

import {
    listarCursosBanco,
    criarCursoBanco,
    buscarCursoBanco,
    removerCursoBanco,
    atualizarCursoBanco
} from "../models/modelCurso.js"

export const criarCurso = async (req, res) => {
    const { cod, curso, ch, tipo } = req.body

    await criarCursoBanco(cod, curso, ch, tipo)

    res.status(201).json({
        mensagem: 'Curso cadastrado com sucesso!'
    })
}

export const listarCursos = async (req, res) => {
    const cursos = await listarCursosBanco()

    res.render('cursos', {
        cursos
    })
}

export const buscarCurso = async (req, res) => {
    const cursoEncontrado = await buscarCursoBanco(req.params.cod)

    if (!cursoEncontrado) {
        return res.status(404).json({
            mensagem: 'Curso não encontrado!'
        })
    }

    res.status(200).json({
        mensagem: 'Curso encontrado!',
        cursoEncontrado
    })
}

export const atualizarCurso = async (req, res) => {
    const { curso, ch, tipo } = req.body
    const cod = req.params.cod

    const cursoEncontrado = await buscarCursoBanco(cod)

    if (!cursoEncontrado) {
        return res.status(404).json({
            mensagem: 'Curso não encontrado!'
        })
    }

    await atualizarCursoBanco(cod, curso, ch, tipo)

    res.status(200).json({
        mensagem: 'Curso atualizado com sucesso!'
    })
}

export const removerCurso = async (req, res) => {
    const cod = req.params.cod

    const cursoEncontrado = await buscarCursoBanco(cod)

    if (!cursoEncontrado) {
        return res.status(404).json({
            mensagem: 'Curso não encontrado!'
        })
    }

    await removerCursoBanco(cod)

    res.status(200).json({
        mensagem: 'Curso removido com sucesso!'
    })
}

export const alterarCurso = async (req, res) => {
    const cod = req.params.cod
    const { curso, ch, tipo } = req.body

    const cursoEncontrado = await buscarCursoBanco(cod)

    if (!cursoEncontrado) {
        return res.status(404).json({
            mensagem: 'Curso não encontrado!'
        })
    }

    const novoCurso = curso || cursoEncontrado.curso
    const novaCh = ch || cursoEncontrado.ch
    const novoTipo = tipo || cursoEncontrado.tipo

    await atualizarCursoBanco(cod, novoCurso, novaCh, novoTipo)

    res.status(200).json({
        mensagem: 'Curso alterado com sucesso!'
    })
}

export const cadastroCurso = (req, res) => {
    res.sendFile(
        path.resolve('./src/public/html/cadastroCurso.html')
    )
}
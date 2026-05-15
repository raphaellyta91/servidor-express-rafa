import { conexao } from '../config/conexao.js'

export async function listarCursosBanco() {

    const [rows] = await conexao.query(
        'SELECT * FROM cursos'
    )

    return rows
}

export async function criarCursoBanco(
    cod,
    curso,
    ch,
    tipo
) {

    const sql = `
        INSERT INTO cursos
        (cod, curso, ch, tipo)
        VALUES (?, ?, ?, ?)
    `

    await conexao.query(
        sql,
        [cod, curso, ch, tipo]
    )
}

export async function buscarCursoBanco(cod) {

    const [rows] = await conexao.query(
        'SELECT * FROM cursos WHERE cod = ?',
        [cod]
    )

    return rows[0]
}

export async function removerCursoBanco(cod) {

    await conexao.query(
        'DELETE FROM cursos WHERE cod = ?',
        [cod]
    )
}

export async function atualizarCursoBanco(
    cod,
    curso,
    ch,
    tipo
) {

    const sql = `
        UPDATE cursos
        SET curso = ?, ch = ?, tipo = ?
        WHERE cod = ?
    `

    await conexao.query(
        sql,
        [curso, ch, tipo, cod]
    )
}
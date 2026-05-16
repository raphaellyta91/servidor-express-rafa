import { conexao } from '../config/conexao.js'

export async function listarCursosBanco() {
  const sql = 'SELECT * FROM cursos'
  const [cursos] = await conexao.execute(sql)
  return cursos
}

export async function cadastrarCursoBanco(cod, curso, ch, tipo) {
  const sql = `
    INSERT INTO cursos (cod, curso, ch, tipo)
    VALUES (?, ?, ?, ?)
  `

  await conexao.execute(sql, [cod, curso, ch, tipo])
}

export async function removerCursoBanco(idCurso) {
  const sql = 'DELETE FROM cursos WHERE idCurso = ?'
  await conexao.execute(sql, [idCurso])
}
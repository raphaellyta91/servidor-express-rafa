import { conexao } from '../config/conexao.js'

export async function listarAlunosBanco() {
  const sql = 'SELECT * FROM alunos'
  const [alunos] = await conexao.execute(sql)
  return alunos
}

export async function cadastrarAlunoBanco(matricula, nome, telefone, email, curso) {
  const sql = `
    INSERT INTO alunos (matricula, nome, telefone, email, curso)
    VALUES (?, ?, ?, ?, ?)
  `

  await conexao.execute(sql, [matricula, nome, telefone, email, curso])
}

export async function removerAlunoBanco(idAluno) {
  const sql = 'DELETE FROM alunos WHERE idAluno = ?'
  await conexao.execute(sql, [idAluno])
}
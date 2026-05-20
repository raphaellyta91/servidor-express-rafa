import path from 'path'
import Curso from '../models/modelCursoROM.js'

export function abrirCadastroCurso(req, res) {
  res.sendFile(path.resolve('./src/views/cadastro.html'))
}

export async function cadastrarCurso(req, res) {

    const { cod, curso, ch, tipo } = req.body
    if(!cod || !curso || !ch || !tipo) {
        return res.status(400).json({mensagem: 'Preencha todos os dados!'})
    }

    try{
        const cursoNovo = await Curso.create(req.body)
        console.log(cursoNovo)
        res.redirect('/cursos')

    }catch(err){
        console.log(err)
        res.status(500).json({ erro: err.message})
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
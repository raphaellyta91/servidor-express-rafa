import express from 'express'

import routeAluno from './routes/routeAluno.js'
import routeCurso from './routes/routeCurso.js'

const app = express()

const PORT = 3000
const HOST = 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(routeAluno)
app.use(routeCurso)

app.get('/', (req, res) => {
    res.render('index', {
        nome: 'Rafa'
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`)
})
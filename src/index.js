import express from 'express'
import router from './routes/router.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.set('view engine', 'ejs')
app.set('views', './src/views')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
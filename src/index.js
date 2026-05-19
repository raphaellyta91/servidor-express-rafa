import express from 'express';
import routeCurso from './routes/routeCurso.js';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import sequelize from './config/rom.js';

import { sincronizarBD } from './config/rom.js';
import Curso from './models/modelCursoROM.js';

dotenv.config();
sincronizarBD();

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', routeCurso);

sincronizarBD();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
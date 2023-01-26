import 'dotenv/config.js'
import './config/database.js' //requiero la configuracion de la db
import cors from 'cors' //middleware que me da permisos para trabajar con diferentes servidores
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js' //rutas de index
import { __dirname } from './utils.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js'
import { errorHandler } from './middlewares/errorHandler.js'

let app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter) //nuevo middleware en ruta
app.use(notFoundHandler)
app.use(errorHandler)

export default app; // /api/comic/
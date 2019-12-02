const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const systemRouter = require('./routes/system');

const sistema = 'public/sistema';
const app = express();

dotenv.config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/system', express.static(path.join(__dirname, sistema, 'src')));
app.use('/assets', express.static(path.join(__dirname, sistema, 'assets')));

app.use('/', indexRouter);
app.use('/system', systemRouter);

module.exports = app;

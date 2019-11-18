const express = require('express');
const router = express.Router();
const path = require('path');
const src = __dirname+'/../public/sistema/src'

router.get('/', function(req, res, next) {
  res.render('index', { title: '.Sys' });
});

router.get('/dashboard', function(req, res, next) {
  const html = path.resolve(src, 'dashboard.html');
  res.sendFile(html);
});

router.get('/funcionario', function(req, res, next) {
  const html = path.resolve(src, 'funcionario.html');
  res.sendFile(html);
});

router.get('/funcionario=0', function(req, res, next) {
  const html = path.resolve(src, 'cadastro-funcionario.html');
  res.sendFile(html);
});

router.get(/(\/funcionario=)[1-9][0-9]*$/, function(req, res, next) {
  const html = path.resolve(src, 'editar-funcionario.html');
  res.sendFile(html);
});

router.get('/squad', function(req, res, next) {
  const html = path.resolve(src, 'squad2.html');
  res.sendFile(html);
});

router.get('/squad=0', function(req, res, next) {
  const html = path.resolve(src, 'cadastro-squad.html');
  res.sendFile(html);
});

router.get(/(\/squad=)[1-9][0-9]*$/, function(req, res, next) {
  const html = path.resolve(src, 'editar-squad.html');
  res.sendFile(html);
});

module.exports = router;

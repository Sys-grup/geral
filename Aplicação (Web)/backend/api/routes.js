'use strict'

const express = require('express');

const routes = express.Router();

// Squads

const SquadController = require('./controllers/SquadController');

// Retorna a lista de Squads
routes.get('/squad',  async (req, res) => {
    const response = await SquadController.list(req, res);
    return response;
});

// Retorna os dados de um squad
routes.get('/getSquad',  async (req, res) => {
    const response = await SquadController.getSquad(req, res);
    return response;
});

// Cadastro de squad
routes.post('/squad', async (req, res) => {
    const response = await SquadController.createSquad(req, res);
    return response;
});

// Edição de squad
routes.put('/squad', async (req, res) => {
    const response = await SquadController.updateSquad(req, res);
    return response;
});

// Funcionários

const FuncController = require('./controllers/FuncController');

// Retorna a lista de funcionários
routes.get('/funcionarios',  async (req, res) => {
    const response = await FuncController.list(req, res);
    return response;
});

// Retorna sessions para login
routes.post('/sessions', async(req, res) => {
    const response = await FuncController.getSessions(req, res);
    return response;
});


// Dashboard

// Retorna dados de notificações

routes.get('/notifications', async(req, res) => {
    const response = await FuncController.getNotifications(req, res);
    return response;
});

module.exports = routes;
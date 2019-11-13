'use strict'

const express = require('express');

const routes = express.Router();

// Squads
const SquadController = require('./controllers/SquadController');
routes.get('/squad',  async (req, res) => {
    const response = await SquadController.list(req, res);
    return response;
})

// Funcionários

const FuncController = require('./controllers/FuncController');
routes.get('/func',  async (req, res) => {
    const response = await FuncController.list(req, res);
    return response;
})

module.exports = routes;
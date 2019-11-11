'use strict'

const express = require('express');

const routes = express.Router();

// Squads
const SquadController = require('./controllers/SquadController');
routes.get('/squad',  async (req, res) => {
    const response = await SquadController.list(req, res);
    return response;
})

module.exports = routes;
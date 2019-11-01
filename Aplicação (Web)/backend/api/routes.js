'use strict'

const express = require('express');

const routes = express.Router();

// Squads
const SquadController = require('./controllers/SquadController');
routes.get('/squad', (req, res) => {
    const response = SquadController.get(req, res);
    return response;
})

module.exports = routes;
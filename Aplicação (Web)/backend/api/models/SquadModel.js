'use strict';

const { query } = require('./utilModel');
const connection = require('../configs/connection');

class SquadModel {

    async select(id) {

        const sql = `
            select 
            idSquad, 
            apelidoSquad, 
            areaSquad 
            FROM tblSquad 
            WHERE fkConta = ${id};
        `;

        let listaSquads = await query(connection, sql);
        return listaSquads.recordsets[0];

    }

    async index() {

        const sql = `
            
        `;

        let squad = await query(connection, sql);
        return squad.recordsets[0];

    }

    async create() {
        
        const sql = `

        `;

        let response = await query(connection, sql);
        return response.recordsets[0];

    }
    
    async update() {
        
        const sql = `

        `;

        let response = await query(connection, sql);
        return response.recordsets[0];

    }

}

module.exports = SquadModel;
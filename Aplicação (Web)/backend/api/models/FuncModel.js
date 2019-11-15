'use strict';

const { query } = require('./utilModel');
const connection = require('../configs/connection');

class FuncModel {
    
    async select() {

        const sql = `
            select * from tblFuncionario
        `;

        let listaFuncionarios = await query(connection, sql);
        return listaFuncionarios.recordsets[0];

    }

    async index() {

        const sql = `
        
        `;

        let response = await query(connection, sql);
        return response.recordsets[0];

    }

}

module.exports = FuncModel;
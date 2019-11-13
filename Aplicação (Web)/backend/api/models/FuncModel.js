'use strict';

const { query } = require('./utilModel');
const database = require('../Database');
class FuncModel {
    constructor() {
    }
    
    async select() {
        const sql = `
            select * from tblFuncionario
        `;

        let listaFuncionarios = await query(database, sql);
        return listaFuncionarios.recordsets[0];
    }

}

module.exports = FuncModel;
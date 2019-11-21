'use strict';

const { query } = require('./utilModel');
const connection = require('../configs/connection');

class FuncModel {
    
    async select() {

        const sql = `
            SELECT 
                F.idFuncionario as id,
                F.identificador as tag,
                F.nomeFuncionario as nome,
                F.sexo as sexo,
                C.nomeCargo as cargo,
                S.apelidoSquad as squad,
                F.fkMaquina as idMaquina,
                F.fkSquad as idSquad
            FROM tblFuncionario F
            INNER JOIN tblCargo C
                ON F.fkCargo = C.idCargo
            INNER JOIN tblSquad S
                ON F.fkSquad = S.idSquad
        `;

        const listaFuncionarios = await query(connection, sql);
        return listaFuncionarios.recordsets[0];

    }

    async index(login, senha) {

        const sql = `
            SELECT idConta FROM tblContas WHERE login= '${login}' AND senha='${senha}';
        `;

        let response = await query(connection, sql);
        return response.recordsets[0];

    }

    async funcionarioSquad() {
        const sql = `
            SELECT idFuncionario, nomeFuncionario FROM tblFuncionario WHERE fkSquad IS NULL
        `;

        let response = await query(connection, sql);
        return response.recordsets[0];

    }

}

module.exports = FuncModel;
'use strict';

const { query } = require('./utilModel');
const connection = require('../configs/connection');

class SquadModel {

    async select(id) {

        const sql = `
            SELECT
                idSquad AS id,
                apelidoSquad AS nome,
                areaSquad AS area,
                Descricao AS descricao,
                Objetivo AS objetivo
            FROM  tblSquad
            WHERE fkConta = ${id};
        `;

        let listaSquads = await query(connection, sql);
        return listaSquads.recordsets[0];

    }

    async index(id, idSquad) {

        const sql = `
            SELECT
                apelidoSquad,
                areaSquad,
                Descricao,
                Objetivo
            FROM  tblSquad
            WHERE
            fkConta = ${id}
            AND
            idSquad= ${idSquad};
        `;

        let squad = await query(connection, sql);
        return squad.recordsets[0];

    }

    async create(apelido, area, descricao, objetivo, id) {

        const sql = `
            INSERT
            INTO tblSquad(apelidoSquad, areaSquad, Descricao, Objetivo, fkConta)
            VALUES
            ('${apelido}', '${area}', '${descricao}', '${objetivo}', ${id});
        `;

        await query(connection, sql);

    }

    async update(apelido, area, descricao, objetivo, id) {

        const sql = `
            UPDATE
                tblSquad
            SET
                apelidoSquad = '${apelido}', areaSquad = '${area}', Descricao = '${descricao}', Objetivo = '${objetivo}'
            WHERE
                idSquad = ${id}
        `;

        await query(connection, sql);

    }

}

module.exports = SquadModel;
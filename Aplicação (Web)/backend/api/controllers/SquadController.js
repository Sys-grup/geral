const SquadModel = require('../models/SquadModel');


const list = async (req, res) => {

    const { id } = req.headers;

    const model = new SquadModel();
    
    if(id) {

        const listaSquads = await model.select(id);

        return res.status(200).json(listaSquads);

    }else{

        return res.status(400).end();
        
    }

}

const getSquad = async (req, res) => {

    const { idSquad } = req.query;
    const { id } = req.headers;

    const model = new SquadModel();

    if(id && idSquad) {
    
        const dadosSquad = await model.index(id, idSquad);

        return res.status(200).json(dadosSquad);
    
    }else{

        return res.status(400).end();

    }
}

const createSquad = async (req, res) => {

    const { id } = req.headers;
    const { nome: apelido, area, descricao, objetivo, listFunc } = req.body;

    const model = new SquadModel();

    if(id && apelido && area && descricao && objetivo){

        await model.create(apelido, area, descricao, objetivo, id);
        await model.addFuncionarioSquad(listFunc);
        return res.status(201).end();

    } else {

        return res.status(400).end();
    
    }

}

const updateSquad = async ( req, res ) => {

    const { id } = req.query;
    const { nome: apelido, area, descricao, objetivo } = req.body;
    const model = new SquadModel();

    if(id && apelido && area && descricao && objetivo){

        await model.update(apelido, area, descricao, objetivo, id);
        return res.status(201).end();

    } else {

        return res.status(400).end();
    
    }
}

module.exports = {
    list,
    getSquad,
    createSquad,
    updateSquad,
};
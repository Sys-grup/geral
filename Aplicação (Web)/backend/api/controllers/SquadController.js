const SquadModel = require('../models/SquadModel');


const list = async (req, res) => {

    const { id } = req.headers;

    const model = new SquadModel();
    
    if(id) {

        const listaSquads = await model.select(id);

        return res.json(listaSquads);

    }else{

        return res.json({});
        
    }

}

const getSquad = async (req, res) => {

    const model = new SquadModel();

    const dadosSquad = await model.index();

    return res.json(dadosSquad);

}

const createSquad = async (req, res) => {

    const model = new SquadModel();

    const response = await model.create();

    return res.json(response);

}

const updateSquad = async ( req, res ) => {

    const model = new SquadModel();

    const response = await model.update();

    return res.json(response);

}

module.exports = {
    list,
    getSquad,
    createSquad,
    updateSquad,
};
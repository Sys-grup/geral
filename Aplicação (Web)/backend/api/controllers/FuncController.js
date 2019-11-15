const FuncModel = require('../models/FuncModel');

const list = async (req, res) => {

    model = new FuncModel();
    
    const listaFuncionarios  = await model.select();
    
    return res.json(listaFuncionarios);
}

const getSessions = async (req, res) => {
    
    model = new FuncModel();

    const session = await model.index();

    return res.json(session);
} 

module.exports = {
    list,
    getSessions,
};
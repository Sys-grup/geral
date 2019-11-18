const FuncModel = require('../models/FuncModel');

const list = async (req, res) => {

    model = new FuncModel();
    
    const listaFuncionarios  = await model.select();
    
    return res.status(200).json(listaFuncionarios);
}

const getSessions = async (req, res) => {
    
    model = new FuncModel();

    const session = await model.index();

    return res.status(200).json(session);
} 

module.exports = {
    list,
    getSessions,
};
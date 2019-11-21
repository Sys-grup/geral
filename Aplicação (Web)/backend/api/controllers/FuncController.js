const FuncModel = require('../models/FuncModel');

const list = async (req, res) => {

    model = new FuncModel();
    
    const listaFuncionarios  = await model.select();
    
    return res.status(200).json(listaFuncionarios);
}

const listFuncSquad = async (req, res) => {
    
    model = new FuncModel();

    const listaFuncionarios = await model.funcionarioSquad();

    return res.status(200).json(listaFuncionarios);

}

const getSessions = async (req, res) => {
    
    const { login, senha } = req.body;

    model = new FuncModel();

    const session = await model.index(login, senha);

    if(session.length > 0) {
        return res.status(200).json(session);
    }else {
        return res.status(404).end();
    }

} 

module.exports = {
    list,
    getSessions,
    listFuncSquad,
};
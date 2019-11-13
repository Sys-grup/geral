const FuncModel = require('../models/FuncModel');

const list = async (req, res) => {
    model = new FuncModel();
    const listaFuncionarios  = await model.select();
    return res.json(listaFuncionarios);
}

module.exports = {
    list,
};
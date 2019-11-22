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

const createFunc = async (req, res) => {
    const { identFunc, nomeFunc, sexoFunc, fkSquad, cargo, maquina, conta } = req.body;
    model = new FuncModel();

    if(identFunc && nomeFunc && sexoFunc && cargo && maquina ){

        await model.createFunc(identFunc, nomeFunc, sexoFunc, fkSquad, cargo, maquina, conta);
        return res.status(201).end();

    } else {

        return res.status(400).end();
    
    }
}

const updateFunc = async (req, res) => {
    const { id } = req.query;
    const { identFunc, nomeFunc, sexoFunc, fkSquad, cargo, maquina, conta } = req.body;
    model = new FuncModel();

    console.log(req.body);

    if(identFunc && nomeFunc && sexoFunc && cargo && maquina){

        await model.updateFunc(identFunc, nomeFunc, sexoFunc, fkSquad, cargo, maquina, conta, id);
        return res.status(201).end();

    } else {

        return res.status(400).end();
    
    }
}

const deleteFunc = async (req, res) => {
    const { id } = req.query;
    model = new FuncModel();

    if(id){
        await model.deleteFunc(id);
        return res.status(204).end();

    } else {

        return res.status().end();
    }


}
module.exports = {
    list,
    getSessions,
    createFunc,
    updateFunc,
    listFuncSquad,
    deleteFunc,
};
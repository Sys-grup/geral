let funcionario = {};
window.onload = () => {
    fetch("http://localhost:8080/funcionarios",
        {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'text/plain',
            'id': localStorage.getItem("idConta"),
            })
        })
    .then(response => response.json())
    .then(result => {
        funcionario = result.filter(funcionario => funcionario.id == conferirUrl())[0];
        carregarFormulario(funcionario);
    })
    .then(() =>
        fetch("http://localhost:8080/squad",
        {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'text/plain',
            'id': localStorage.getItem("idConta"),
            })
        }))
        .then(response => response.json())
        .then(result => {
            carregarSquads([{id: 0, nome:"Sem squad"}, ...result]);
        })
    .then(() =>
        fetch("http://localhost:8080/cargos",
        {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'text/plain',
            'id': localStorage.getItem("idConta"),
            })
        }))
    .then(response => response.json())
    .then(result => {
        carregarCargos(result);
    })
    .then(() =>
        fetch("http://localhost:8080/maquinas",
        {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'text/plain',
            'id': localStorage.getItem("idConta"),
            })
        }))
    .then(response => response.json())
    .then(result => {
        carregarMaquinas([
            {id: 0, nome:"Sem maquina"},
            ...result.filter(maquina => !maquina.funcionario || maquina.id == funcionario.idMaquina)
        ]);
    })
    .catch(err => {
        console.error(err);
    })
}

function conferirUrl() {
    const url = window.location.pathname;
    const id = url.substring(url.indexOf('=')+1);
    return id;
}

function carregarCargos(lista) {
    document.getElementById("validation-cargo").innerHTML = "";
    lista.map(cargo => document.getElementById("validation-cargo").innerHTML += `<option value="${cargo.id}">${cargo.nome}</option>`);
    
    const cargoFuncionario = lista.filter(cargo => cargo.nome == funcionario.cargo)[0];
    document.getElementById("validation-cargo").value = cargoFuncionario.id || 0;
}

function carregarSquads(lista) {
    document.getElementById("validation-squad").innerHTML = "";
    lista.map(squad => document.getElementById("validation-squad").innerHTML += `<option value="${squad.id}">${squad.nome}</option>`);

    document.getElementById("validation-squad").value = funcionario.idSquad;
}

function carregarMaquinas(lista) {
    document.getElementById("validation-maquina").innerHTML = "";
    lista.map(maquina => document.getElementById("validation-maquina").innerHTML += `<option value="${maquina.id}">${maquina.nome}</option>`);
    
    document.getElementById("validation-maquina").value = funcionario.idMaquina || 0;
}

function carregarFormulario(funcionario) {
    document.getElementById("validation-nome").value = funcionario.nome;
    console.log(funcionario.entrada.substr(11,5));
    document.getElementById("validation-identificador").value = funcionario.tag;
    document.getElementById("validation-sexo").value = funcionario.sexo;
}

function enviarFormulario() {
    const nome = document.getElementById("validation-nome").value;
    const identificador = document.getElementById("validation-identificador").value;
    const maquina = document.getElementById("validation-maquina").value;
    const cargo = document.getElementById("validation-cargo").value;
    const squad = document.getElementById("validation-squad").value;
    const sexo = document.getElementById("validation-sexo").value;

    if (!nome && !identificador && !cargo && !sexo) {
        return false
    }

    fetch(`http://localhost:8080/funcionarios?id=${funcionario.id}`,
    {
        method: 'PUT',
        headers: new Headers({
        'Content-Type': 'application/json',
        'id': localStorage.getItem("idConta"),
        }),
        body: JSON.stringify({
            nome,
            identificador,
            maquina,
            cargo,
            squad,
            sexo
        })
    })
    .then(response => {
        window.location.pathname = "/system/funcionario"
    })
    .catch(err => {
        console.error(err);
    });
}
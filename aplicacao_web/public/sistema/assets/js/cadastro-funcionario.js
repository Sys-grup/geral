window.onload = () => {
<<<<<<< HEAD
    fetch("http://localhost:8080/squad",
=======
    fetch(`http://localhost:8080/squad`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
    {
        method: process.env.API_URL,
        headers: new Headers({
          'Content-Type': 'text/plain',
          'id': localStorage.getItem("idConta"),
        })
    })
    .then(response => response.json())
    .then(result => {
        carregarSquads([{id: 0, nome:"Sem squad"}, ...result]);
    })
    .then(() =>
<<<<<<< HEAD
        fetch("http://localhost:8080/cargos",
=======
        fetch(`http://localhost:8080/cargos`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
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
<<<<<<< HEAD
        fetch("http://localhost:8080/maquinas",
=======
        fetch(`http://localhost:8080/maquinas`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
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
            ...result.filter(maquina => !maquina.funcionario)
        ]);
    })
    .catch(err => {
        console.error(err);
    });
}

function carregarCargos(lista) {
    document.getElementById("validation-cargo").innerHTML = "";
    lista.map(cargo => document.getElementById("validation-cargo").innerHTML += `<option value="${cargo.id}">${cargo.nome}</option>`);
}

function carregarSquads(lista) {
    document.getElementById("validation-squad").innerHTML = "";
    lista.map(squad => document.getElementById("validation-squad").innerHTML += `<option value="${squad.id}">${squad.nome}</option>`);
}

function carregarMaquinas(lista) {
    document.getElementById("validation-maquina").innerHTML = "";
    lista.map(maquina => document.getElementById("validation-maquina").innerHTML += `<option value="${maquina.id}">${maquina.nome}</option>`);
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

<<<<<<< HEAD
    fetch("http://localhost:8080/funcionarios",
=======
    fetch(`http://localhost:8080/funcionarios`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
    {
        method: 'POST',
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
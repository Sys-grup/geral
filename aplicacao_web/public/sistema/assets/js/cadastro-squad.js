window.onload = () => {
<<<<<<< HEAD
    fetch("http://localhost:8080/funcionariosSquad",
=======
    fetch(`http://localhost:8080/funcionariosSquad`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
    {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain',
        })
    })
    .then(response => response.json())
    .then(result => { 
        carregarFuncionarios(result);
        console.log("Result", result);
    })
    .catch(err => { 
        console.error(err); 
    });
}

function carregarFuncionarios(lista) {
    document.getElementById('custom-headers').innerHTML = "<option value='1'>funcionario</option>";

    lista.map(funcionario => 
        document.getElementById('custom-headers').innerHTML =
            `<option value='${funcionario.id}' selected>${funcionario.nome}</option>`
    )
}

function enviarFormulario() {
    const nome = document.getElementsByName("validation-nome")[0].value;
        if (!nome) return;
    //const area = document.getElementsByName("validation-area")[0].value;
        // if (!area) document.getElementsByName("validation-area")[0].color = 'tomato';
    const descricao = document.getElementsByName("validation-descricao")[0].value;
        if (!descricao) return;
    const objetivo = document.getElementsByName("validation-objetivo")[0].value;
        if (!objetivo) return;
    const selecionados = $('#custom-headers').val();

<<<<<<< HEAD
    fetch("http://localhost:8080/squad",
=======
    fetch(`http://localhost:8080/squad`,
>>>>>>> 4dcea4b202689304924c2ffc86a3c90d48c89058
    {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'id': 1,
        }),
        body: JSON.stringify({
            "nome": nome,
            "area": "Software",
            "descricao": descricao,
            "objetivo": objetivo,
            "listFunc": 1,
        }),
    })
    .then(response => {
        window.location.path = "/system/squad"
    })
    .catch(err => { 
        console.error(err);
    });
}
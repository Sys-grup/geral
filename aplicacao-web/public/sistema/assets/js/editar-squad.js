const id = conferirUrl();

window.onload = () => {
    fetch(`http://localhost:8080/getsquad?idSquad=${id}`,
    {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain',
          'id': 1,
        })
    })
    .then(response => response.json())
    .then(result => { 
        carregarFormulario(result[0]);
    })
    .catch(err => { 
        console.error(err); 
    });
}

function conferirUrl() {
    const url = window.location.pathname;
    return url.substring(url.indexOf('=')+1);
}

function carregarFormulario(form) {
    if (!form) window.location.pathname = '/system';
    document.getElementsByName("validation-nome")[0].value = form.nome;
    // document.getElementsByName("validation-area")[0].value = form.area;
    document.getElementsByName("validation-descricao")[0].value = form.descricao;
    document.getElementsByName("validation-objetivo")[0].value = form.objetivo;
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

    fetch(`http://localhost:8080/squad?id=${id}`,
    {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            "nome": nome,
            "area": "Software",
            "descricao": descricao,
            "objetivo": objetivo,
        })
    })
    .then(() => window.location.pathname = '/system/squad')
    .catch(err => { 
        console.error(err); 
    });
}
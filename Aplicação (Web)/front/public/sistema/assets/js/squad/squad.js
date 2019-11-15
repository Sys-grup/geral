window.onload = () => {
    fetch("http://localhost:8080/squad",
    {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain',
          'id': 1,
        })
    })
    .then(response => response.json())
    .then(result => { 
        carregarSquads(result);
    })
    .catch(err => { 
        console.error(err); 
    });
}

function carregarSquads(listSquads) {
    // let listSquads =  [{"nome": "Alpha", "id": 1, "status":"atention"}, {"nome":"Beta", "id": 2, "status":"offline"}];
    let divs = `<a class="content col-md-2 default" href="squad=0">
                    <span class ="add" >+</span>
                </a>`;

    listSquads.map(squad => {
            divs += `
                <div class="content col-md-2 ${'default'}" id="squadContent" onclick="carregarInfo('${squad.descricao}', '${squad.objetivo}')">
                    <span>${squad.nome}</span>
                </div>
            `

        document.getElementById("squads").innerHTML = divs;
    });
}

function carregarInfo(objetivo, descricao) {
    document.getElementById('squadObjetivo').innerHTML = objetivo;
    document.getElementById('squadDescricao').innerHTML = descricao;
}
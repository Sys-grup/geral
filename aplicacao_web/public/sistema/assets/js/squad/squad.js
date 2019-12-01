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

let squadAtual = {nome:null, id:null};
function carregarSquads(listSquads) {
    // let listSquads =  [{"nome": "Alpha", "id": 1, "status":"atention"}, {"nome":"Beta", "id": 2, "status":"offline"}];

    let divs = `<a class="content col-md-2 default" href="squad=0">
                    <span class ="add" >+</span>
                </a>`;

    listSquads.map(squad => {
        divs += `
                <div class="content col-md-2 ${'default'}" id="squadContent" onclick="carregarInfo('${squad.descricao}', '${squad.objetivo}');setSquadAtual('${squad.nome}', ${squad.id})">
                    <span>${squad.nome}</span>
                </div>
            `

        document.getElementById("squads").innerHTML = divs;
    });
}

function carregarInfo(objetivo, descricao) {
    document.getElementById('squadObjetivo').innerHTML = objetivo;
    document.getElementById('squadDescricao').innerHTML = descricao;
    document.getElementById('squad-info').hidden = false;
    document.getElementById('geral-info').hidden = true;
    document.getElementById('squad-dash').hidden = false;
    document.getElementById('delete-squad').hidden = false;
    document.getElementById('edit-squad').hidden = false;


}

function setSquadAtual(nome, id) {
    squadAtual.nome = nome;
    squadAtual.id = id;
}

$('#modal-delete-squad').on('show.bs.modal', function (event) {
    modal.find('#ModalCenterTitle').text(`Excluir ${squadAtual.nome}`);
})

function deletarSquad() {
    const id = squadAtual.id;
    console.log("A");
    fetch("http://localhost:8080/squad",
    {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'id':localStorage.getItem('idConta'),
        }),
        body: JSON.stringify({
            id,
        })
    })
    .then(response => {
        console.log("SUC");
    })
    .catch(err => {
        console.log("err");
    });
}


window.onload = () => {
    fetch(`http://localhost:8080/squad`,
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
let lSquad = "a";
function carregarSquads(listSquads) {
    // let listSquads =  [{"nome": "Alpha", "id": 1, "status":"atention"}, {"nome":"Beta", "id": 2, "status":"offline"}];

    let divs = `<a class="content col-md-2 default" href="squad=0">
                    <span class ="add" >+</span>
                </a>`;

    lSquad = listSquads.filter(squad => squad.funcionarios);
    listSquads.map(squad => {
        divs += `
                <div class="content col-md-2 ${'default'}" id="squadContent" onclick="carregarInfo('${squad.descricao}', '${squad.objetivo}', '${squad.online}', '${squad.total}');setSquadAtual('${squad.nome}', ${squad.id})">
                    <span>${squad.nome}</span>
                </div>
            `;
            document.getElementById("squads").innerHTML = divs;
        });
    }
    
    function carregarInfo(objetivo, descricao, online, total) {
    document.getElementById('listFuncionarios').innerHTML = `${online}/${total}`;
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

function abrirModal() {
    
   const funcionarios = lSquad.filter(squad => squad.id == squadAtual.id)[0].funcionarios;

   let superior ="", resto = "";
   funcionarios.map(funcionario => {
       funcionario.idCargo > 5 ? 
        superior += `
            <div class="funcionario">
                <div class="funcionario-avatar" title="${funcionario.Online ? 'Online' : 'offline'}">
                    <img class="rounded-circle funcionario-foto ${funcionario.Online ? 'success' : 'danger'}"
                        src="../assets/images/user/avatar-${funcionario.sexo}.jpg"
                        alt="activity-user">
                    <div class="funcionario-status ${funcionario.Online ? 'success' : 'danger'}"></div>
                </div>
                <span class="funcionario-nome" title="${funcionario.nome}">${funcionario.nome}</span>
                <span class="funcionario-cargo">${Math.floor(Math.random() * 2) ? 'Supervisor' : 'Gerente'}</span>
            </div>
        `
       :
       resto += `
            <div class="funcionario">
                <div class="funcionario-avatar" title="${funcionario.Online ? 'Online' : 'offline'}">
                    <img class="rounded-circle funcionario-foto ${funcionario.Online ? 'success' : 'danger'}"
                        src="../assets/images/user/avatar-${funcionario.sexo}.jpg"
                        alt="activity-user">
                    <div class="funcionario-status ${funcionario.Online ? 'success' : 'danger'}"></div>
                </div>
                <span class="funcionario-nome" title="${funcionario.nome}">${funcionario.nome}</span>
                <span class="funcionario-cargo">${funcionario.cargo}</span>
            </div>
        `;
    })
    document.getElementById('lista-funcionarios').innerHTML = resto;
    document.getElementById('lista-superior').innerHTML = superior;

}

$('#modal-delete-squad').on('show.bs.modal', function (event) {
    modal.find('#ModalCenterTitle').text(`Excluir ${squadAtual.nome}`);
})

function editarSquad() {
    window.location.pathname = `/system/squad=${squadAtual.id}`;
}

function deletarSquad() {
    const id = squadAtual.id;
    fetch(`http://localhost:8080/squad`,
    {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'id': localStorage.getItem('idConta'),
        }),
        body: JSON.stringify({
            id,
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(err => {
        console.log("err");
    });
}


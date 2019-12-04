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
let charts;
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
    document.getElementById('listFuncionariosPoint').style = `background-color: ${online/total*100>50? "#28a745":"#dc3545"} !important`;
    document.getElementById('listFuncionarios').innerHTML = `${online}/${total}`;
    document.getElementById('squadObjetivo').innerHTML = objetivo;
    document.getElementById('squadDescricao').innerHTML = descricao;
    document.getElementById('squad-info').hidden = false;
    document.getElementById('geral-info').hidden = true;
    document.getElementById('squad-dash').hidden = false;
    document.getElementById('delete-squad').hidden = false;
    document.getElementById('edit-squad').hidden = false;

    setInterval(() => {
        atualizarDados();
    }, 6000);
}

function setSquadAtual(nome, id) {
    if (nome === squadAtual.nome) return;
    squadAtual.nome = nome;
    squadAtual.id = id;
    carregarGrafico();
}

function carregarGrafico() {
    carregando('msg-bar', true, 'chart-bar');
    atualizarDados();
}

function atualizarDados() {
    buscarDados()
    .then(dados => {
        if (charts) {
            charts.destroy();
            charts = null;
        }
        if (dados.hardware.length) {
            hardware(dados.hardware);
        }
        else { carregando('msg-bar', false, 'chart-bar', false); }
            
    })
    loadingFullscreen(false);
}

function hardware(dados) {
    const span = 'msg-bar';
    const div = 'chart-bar';
    if(!dados.length) return carregando(span, true, div, false);
    carregando(span, true, div);

    const dimensoes = {
        xAxes: ["CPU","RAM","HD"],
        yAxes: dados.map(squad => [squad.CPU.toFixed(2),squad.RAM.toFixed(2),squad.HD.toFixed(2)]),
        series: dados.map(squad => squad.apelidoSquad),
        color: dados.map((v, i) => getCor(i, v.apelidoSquad)),
        labels: {}
    }

    barChart(dimensoes, div);
    carregando(span, false, div);
}

function getCor(i, v) {
    switch (v) {
        case 'Alpha':
            return cores[0];
            break;
        case 'Beta':
            return cores[1];
            break;
        case 'Hotel':
            return cores[2];
            break;
    
        default:
            return cores[i]
            break;
    }
}

const cores = ["#DB0058", "#009999", "#FFEC00", "#00B945", "#C10087", "#04051d", "#08c155", "#02ce64", "#0b27bc", "#09dd1c", "#055bb2", "#0670c9"];

function barChart(dados, element) {
    const chart = {
        type: 'bar',
        data: {
            labels: dados.xAxes,
            datasets: dados.series.map((serie, index) => ({
                label: serie,
                data: dados.yAxes[index],
                backgroundColor:  dados.color[index],
                borderWidth: 0,
            }))
        },
        options: {
            animation: false,
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: !!dados.labels.title,
                labelString: dados.labels.title || null
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: !!dados.labels.x,
                        labelString: dados.labels.x || null
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: !!dados.labels.y,
                        labelString: dados.labels.y || null
                    }
                }]
            }
        }
    };
    const barChart = new Chart(document.getElementById(element), chart);
    charts = barChart;
}

function buscarDados() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/dashSquad?squad=${squadAtual.nome}`,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'text/plain',
                })
            })
            .then(response => response.json())
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            });
    })
}

function carregando(elementId, mostrar = true, chartId, comDados = true) {
    // loadingFullscreen(mostrar);
    const element = document.getElementById(elementId);
    const msg = comDados ? 'Carregando...' : 'Sem dados para este período';
    element.innerHTML = msg;
    element.hidden = !mostrar;
    if (chartId) {
        document.getElementById(chartId).hidden = mostrar;
    }
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


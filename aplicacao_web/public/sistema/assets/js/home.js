const cores = ["#DB0058", "#009999", "#FFEC00", "#00B945", "#C10087", "#04051d", "#08c155", "#02ce64", "#0b27bc", "#09dd1c", "#055bb2", "#0670c9"];

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
        case 'Omega':
            return cores[3];
            break;
        case 'Thor':
            return cores[4];
            break;
        case 'Hercules':
            return cores[5];
            break;
    
        default:
            return cores[i+6]
            break;
    }
}

window.onload = () => {
    buscarDados();
}
function buscarSquads() {
    return new Promise((resolve, reject) => {
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
            resolve(result);
        })
    })
}

function buscarNotificacoes() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/notificacao`,
        {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'text/plain',
            'id': 1,
            })
        })
        .then(response => response.json())
        .then(result => { 
            resolve(result);
        })
    })
}

function buscarDados() {
    buscarSquads()
    .then(result => 
    carregarSquads(result))
    .catch(error => console.log(error));
    
    buscarNotificacoes()
    .then(result => 
    carregarNotificacoes(result))
    .catch(error => console.log(error));
}

function carregarSquads(listSquads) {
    let divs = "";
    listSquads.map(squad => {
        divs += `
                <div class="col-md-12">
                    <div class="card card-squad">
                        <div class="card-body" onclick="window.location.pathname='/system/squad'">
                            <i class="status" style="background:var(--${squad.online/squad.total*100>50? "success":"danger"})"></i>
                            <span>${squad.nome}</span>
                        </div>
                    </div>
                </div>
            `
    });
    document.getElementById("conteudo").innerHTML = divs;
}

function carregarNotificacoes(alertas) {
    let divs = "";
    alertas.map((alerta, index) => {
        let icone;
        if(alertas.nomeTipoNotificacao === 'Offline') {
            icone = "user-x";
        } else
        if(alertas.nomeTipoNotificacao === 'HD') {
            icone = "hard-drive";
        } else
        if(alertas.nomeTipoNotificacao === 'CPU') {
            icone = "cpu";
        } else
        if(alertas.nomeTipoNotificacao === 'RAM') {
            icone = "cpu";
        } else
        if(alertas.nomeTipoNotificacao === 'Processo') {
            icone = "cpu";
        } else
        if(alertas.nomeTipoNotificacao === 'Funcionario') {
            icone = "user";
        } else
        {
            icone = "alert-triangle";
        }
        divs += `
            <div class="col-md-12 espaco-correto">
                <div class="alert alert-${'danger'} div-alerta">
                    <h6>
                        <span><b style="color: ${getCor(index, alerta.apelidoSquad)}">${alerta.apelidoSquad}</b></span>
                        <span style="margin-left: 20px;">${alerta.nomeFuncionario}: <b>${alerta.nomeTipoNotificacao}</b></span>
                        <span style="margin-left: auto;">${new Date(alerta.dataCapturada).toTimeString().substr(0,5)}</span>
                    </h6>
                    <span style="font-size: .8em;">${alerta.observacao}</span>
                </div>
            </div>
        `;
    });
    document.getElementById("div-drop-conteudo").innerHTML = divs;
    setTimeout(()=> feather.replace(), 1);
}
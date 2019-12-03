

const datas = ["01/03/2019", "02/03/2019", "03/03/2019", "04/03/2019", "05/03/2019"];
let squadsData = [
    {
        nome: "Alfa",
        notificacoes: [2, 1, 0, 4, 5],
        horas: 15,
        cor: "#FB3741",
    },
    {
        nome: "Bravo",
        notificacoes: [3, 4, 6, 13, 12],
        horas: 40,
        cor: "#FFDB38",
    },
    {
        nome: "Charlie",
        notificacoes: [0, 0, 1, 3, 2],
        horas: 21,
        cor: "#553ABA",
    },
    {
        nome: "Delta",
        notificacoes: [12, 19, 3, 5, 2],
        horas: 23,
        cor: "#3FD72F",
    },
];
const mediaHardware = [
    {
        info: 'CPU',
        data: [12, 19, 3, 5, 2, 3],
        color: '#4259B9',
        borderWidth: 0
    },
    {
        info: 'RAM',
        data: [15, 29, 30, 51, 21, 32],
        color: '#5DDC3B',
        borderWidth: 0
    },
    {
        info: 'HD',
        data: [15, 29, 30, 51, 21, 32],
        color: '#BB32AB',
        borderWidth: 0
    }
]


const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const cores = ["#DB0058", "#009999", "#FFEC00", "#00B945", "#C10087", "#04051d", "#08c155", "#02ce64", "#0b27bc", "#09dd1c", "#055bb2", "#0670c9"];

window.onload = function () {
    carregarPagina();
}

function carregarPagina() {
    carregando('msg-line', true, 'chart-line');
    carregando('notificacoesRecorrentes');
    carregando('tabela-programas');
    carregando('msg-bar');
    carregando('msg-bar2');
    // ['msg-line','notificacoesRecorrentes','msg-bar','msg-doughnut','tabela-programas']
    // .forEach(id => carregando(id));

    buscarDados()
        .then(dados => carregarGraficos(dados))
        .catch(err => console.log(err))
}

function getPeriodo() {
    return 'SEMANAL';
    return document.getElementById('select-periodo').value;
}

function buscarDados() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/dashboard?periodo=${getPeriodo()}`,
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
            .catch(err => {
                reject(err);
            });
    })
}

function carregarGraficos(dados) {
    console.log('dados: ', dados);
    notificacoesTotal(dados.notificacoes);
    notificacoesRecorrentes(dados.notificacoes);
    programas(dados.programas, document.getElementById('tabela-programas'));
    hardware(dados.hardware);
    tempoOnline(dados.online);
    // barChart(dados, document.getElementById('chart-bar'));
    // dougnutChart(dados, document.getElementById('chart-dougnut'));
}

function carregando(elementId, mostrar = true, chartId, comDados = true) {
    const element = document.getElementById(elementId);
    const msg = comDados ? 'Carregando...' : 'Sem dados para este período';
    element.innerHTML = msg;
    element.hidden = !mostrar;
    if (chartId) {
        document.getElementById(chartId).hidden = mostrar;
    }
}

function notificacoesTotal(dadosOriginal) {
    const span = 'msg-line';
    if (!dadosOriginal.length) return carregando(span, true, null, false);
    carregando('msg-line', true, 'chart-line');

    try {
        const canvas = 'chart-line';
        const dados = dadosOriginal;

        let squads = dados.map(notificacao => notificacao.squad);
        squads = squads.filter((squad, index) => squads.indexOf(squad) === index);

        dados.forEach(notificacao => {
            let data = new Date(notificacao.data);
            if (getPeriodo() === 'DIARIO') {
                notificacao.data = `${data.getHours()}:${data.getMinutes()}`;
            } else
            if (getPeriodo() === 'SEMANAL') {
                notificacao.data = `${semana[data.getDay()]}, ${data.getDate()}`;
            } else
            if (getPeriodo() === 'MENSAL') {
                notificacao.data = `${data.getDate()} ${mes[data.getMonth() - 1]}`;
            } else {
                danotificacao.datata = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
            }
        })

        const datas = dados.map(notificacao => notificacao.data);
        const xAxes = datas.filter((data, index) => datas.indexOf(data) === index);
        const yAxes = squads.map(squad => xAxes.map(data => {
            let count = 0;
            dados.forEach(notificacao => notificacao.data === data && notificacao.squad === squad && count++);
            return count;
        }))

        const dimensoes = {
            xAxes,
            yAxes,
            series: squads,
            colors: squads.map((v, i) => cores[i]),
            labels: {
                title: getPeriodo(),
                y: 'Notificações',
            }
        };
        lineChart(dimensoes, canvas);
        carregando(span, false, canvas);
    } catch (error) {
        carregando(span, true, false, false);
        console.log(error);
    }


}

function notificacoesRecorrentes(dadosOriginal) {
    const div = 'notificacoesRecorrentes';
    if (!dadosOriginal.length) return carregando(div, true, null, false);
    carregando(div, true);

    try {
        let squads = dadosOriginal.map(notificacao => notificacao.squad);
        squads = squads.filter((squad, index) => squads.indexOf(squad) === index);

        let notificacoes = '';

        squads.forEach((squad, index) => {
            const dados = JSON.parse(JSON.stringify(dadosOriginal.filter(notificacao => notificacao.squad === squad)));
            const tipos = dados.map(notificacao => notificacao.tipo);
            const tiposUnico = tipos.filter((tipo, index) => tipos.indexOf(tipo) === index);

            let tipoRecorrente = {nome: null, aparicoes: 0, recente: null};
            tiposUnico.forEach(tipoUnico => {
                let count = 0;
                tipos.forEach(tipo => tipo === tipoUnico && count++);
                if (count>tipoRecorrente.aparicoes) tipoRecorrente = {nome: tipoUnico, aparicoes: count};
            });
            tipoRecorrente.recente = dados.filter(notificacao => notificacao.tipo === tipoRecorrente.nome)[0];

            let conteudo = {}
            if(tipoRecorrente.nome === 'Offline') {
                conteudo.icone = "user-x";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre funcionarios Offline!`;
            } else
            if(tipoRecorrente.nome === 'HD') {
                conteudo.icone = "hard-drive";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre funcionarios com problemas de <b>HD</b>!`;
            } else
            if(tipoRecorrente.nome === 'CPU') {
                conteudo.icone = "cpu";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre funcionarios com problemas de <b>CPU</b>!`;
            } else
            if(tipoRecorrente.nome === 'RAM') {
                conteudo.icone = "cpu";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre funcionarios com problemas de <b>RAM</b>!`;
            } else
            if(tipoRecorrente.nome === 'Processo') {
                conteudo.icone = "cpu";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre funcionarios com problemas de <b>Processo</b>!`;
            } else
            if(tipoRecorrente.nome === 'Funcionario') {
                conteudo.icone = "user";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre com problemas de <b>funcionários</b>!`;
            } else
            {
                conteudo.icone = "alert-triangle";
                conteudo.title = `<b style="color: ${cores[index]}">${squad}</b> tem ${tipoRecorrente.aparicoes} notificações sobre com problemas de <b>${tipoRecorrente.nome}</b>!`;
            }

            notificacoes += `
                <div class="media friendlist-box">
                    <div class="mr-3 photo-table">
                        <i class="feather" data-feather="${conteudo.icone}"></i>
                    </div>
                    <div class="media-body">
                        <h6>${conteudo.title}</h6>
                    </div>
                </div>
            `;
            setTimeout(()=> feather.replace(), 1);
            // conteudo.body = `
            //     Recente:\n
            //     ${tipoRecorrente.recente.funcionario},\n
            //     ${tipoRecorrente.recente.observacao}
            // `;
            // const data = new Date(tipoRecorrente.recente.data);
            // conteudo.data = `${data.getHours()}:${data.getMinutes()} ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

            // <span class="f-12 float-right text-muted" title="${conteudo.data}">
            // ${conteudo.data.substr(0,6)}</span>
            // <p class="text-muted m-0">${conteudo.body}</p>

            // <div class="alert alert-danger">
            //     ${squad}, ${tipoRecorrente.nome} com ${tipoRecorrente.aparicoes}.
            // </div>
        })

        document.getElementById(div).innerHTML = notificacoes;

    } catch (error) {
        carregando(div, true, false, false);
        console.log(error);
    }
}

function programas(dados, element) {
    if (!Object.keys(dados)) return carregando('tabela-programas', true, false, false);
    element.innerHTML = '';
    dados.squads.forEach((squad, index) => {
        const porcentagem = (dados.tempoUso[index] / dados.totalUso[index])*100;
        const horas = `${(dados.tempoUso[index]/60).toFixed()}:${(dados.tempoUso[index]%60).toFixed()}`;
        element.innerHTML += `
            <tr>
                <td>
                    <h6 class="mb-1"><b style="color: ${cores[index]}">${squad}</b></h6>
                    <p class="m-0">Programa mais usado: <b>${dados.programas[index]}</b>
                    </p>
                    <p style="font-size: .9em"> Com <span class="text-c-green">${dados.aparicoes[index]}</span> registros</p>
                </td>
                <td style="text-align: center;"><span class="pie_1">${horas}</span></td>
                <td style="text-align: center;">
                    <h6 class="m-0">${porcentagem}%</h6>
                </td>
            </tr>`;
    });
}

function hardware(dados) {
    const span = 'msg-bar';
    const div = 'chart-bar';
    if(!dados.length) return carregando(span, true, div, false);
    carregando(span, true, div);

    const dimensoes = {
        xAxes: ["CPU","RAM","HD"],
        yAxes: dados.map(squad => [squad.CPU,squad.RAM,squad.HD]),
        series: dados.map(squad => squad.apelidoSquad),
        color: dados.map((v, i) => cores[i]),
        labels: {
            title: getPeriodo(),
        }
    }

    barChart(dimensoes, div);
    carregando(span, false, div);
}

function tempoOnline(dados) {
    const span = 'msg-bar2';
    const div = 'chart-bar2';
    if(!dados.length) return carregando(span, true, div, false);
    carregando(span, true, div);

    let squads = dados.map(dado => dado.apelidoSquad);
    squads = squads.filter((squad, index) => squads.indexOf(squad) === index);

    let datas = dados.map(dado => dado.dataCapturada);
    datas = datas.filter((data, index) => datas.indexOf(data) === index);

    const dimensoes = {
        xAxes: datas,
        yAxes: squads.map(squad => datas.map(data => dados.filter(dado => dado.apelidoSquad == squad && dado.dataCapturada == data).map(dado => dado.cont))),
        series: squads,
        color: squads.map((v, i) => cores[i]),
        labels: {
            title: getPeriodo(),
        }
    }

    barChart(dimensoes, div);
    carregando(span, false, div);
}

function lineChart(dados, elementId) {
    const element = document.getElementById(elementId);
    const chart = {
        type: 'line',
        data: {
            labels: dados.xAxes,
            datasets: dados.series.map((serie, index) => (
                {
                    label: serie,
                    data: dados.yAxes[index],
                    borderColor: dados.colors[index],
                    pointBackgroundColor: dados.colors[index],
                    backgroundColor: dados.colors[index],
                    borderWidth: 3,
                    fill: false,
                }
            ))
        },
        options: {
            responsive: true,
            title: {
                display: !!dados.labels.title,
                labelString: dados.labels.title || null
            },
            tooltips: {
                mode: 'nearest',
                intersect: false,

            },
            hover: {
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
    new Chart(element, chart);
};

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
    new Chart(document.getElementById(element), chart);
}

function doughnutChart(dados, element) {
    const chart = {
        type: 'doughnut',
        data: {
            labels: squadsData.map(squad => squad.nome),
            datasets:
                [{
                    label: 'Horas',
                    data: squadsData.map(squad => squad.horas),
                    backgroundColor: squadsData.map(squad => squad.cor),
                    borderColor: squadsData.map(squad => squad.cor),
                    borderWidth: 0
                },
                ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Semanal'
            },
            tooltips: {
                mode: 'point',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += (data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]) + 'h';
                        return label;
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
        }
    };
    new Chart(element, chart);
}


/////////////////////Relatorios////////////////////////////////////////////////////////

function teste() {
    var radio1 = document.getElementById('radio-1');
    var radio2 = document.getElementById('radio-2');
    var radio3 = document.getElementById('radio-3');
    var dash1 = document.getElementById('dash1');
    var dash2 = document.getElementById('dash2');
    var dash3 = document.getElementById('dash3');


    // for(var k in squadsData) {
    //     console.log(squadsData[k].nome);
    // }



    if (radio1.checked) {

        console.log("Mensal");
    } else if (radio2.checked) {
        console.log("Semanal");
    } else {
        console.log("Diário");
    }

    if (dash1.checked) {

        console.log("Alertas dos squads");
    }
    if (dash2.checked) {
        console.log("Informações de Hardware e Software");
    }
    if (dash3.checked) {
        console.log("Programas mais usados");
    }



}
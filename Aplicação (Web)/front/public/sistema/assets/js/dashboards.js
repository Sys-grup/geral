const datas = ["01/03/2019", "02/03/2019", "03/03/2019", "04/03/2019", "05/03/2019"];
const squadsData = [
    {
        nome: "Alfa",
        notificacoes: [2,1,0,4,5],
        horas: 15,
        cor: "#FB3741",
    },
    {
        nome: "Bravo",
        notificacoes: [3,4,6,13,12],
        horas: 40,
        cor: "#FFDB38",
    },
    {
        nome: "Charlie",
        notificacoes: [0,0,1,3,2],
        horas: 21,
        cor: "#553ABA",
    },
    {
        nome: "Delta",
        notificacoes: [12,19,3,5,2],
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

window.onload = function () {
    var ctx = document.getElementById('chart-line').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas,
            datasets: squadsData.map((squad, index) => (
                {
                        label: squad.nome,
                        data: squad.notificacoes,
                        borderColor: squad.cor,
                        pointBackgroundColor: squad.cor,
                        backgroundColor: squad.cor,
                        borderWidth: 3,
                        fill: false,
                }
            ))
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Semanal'
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
                        display: true,
                        labelString: 'Período'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Notificações'
                    }
                }]
            }
        }
    });
    var ctz = document.getElementById('chart-bar').getContext('2d');
    var myChart1 = new Chart(ctz, {
        type: 'bar',
        data: {
            labels: datas,
            datasets: mediaHardware.map(hardware => ({
                label: hardware.info,
                data: hardware.data,
                backgroundColor: hardware.color,
                borderWidth: 0,
            }))
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Semanal'
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
                        display: true,
                        labelString: 'Período'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Horas '
                    }
                }]
            }
        }
    });
    // var cty = document.getElementById('chart-pie').getContext('2d');
    // var myChart2 = new Chart(cty, {
    //     type: 'pie',
    //     data: {
    //         labels: ["Delta","Charlie"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'   
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         },
    //         ]
    //     },
    //     options: {
    //         responsive: true,
    //         title: {
    //             display: true,
    //             text: 'Chart.js Line Chart'
    //         },
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false,
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: false,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Month'
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: false,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Value'
    //                 }
    //             }]
    //         }
    //     }
    // }
    // );
    var ctu = document.getElementById('chart-horizontal-bar').getContext('2d');
    var myChart3 = new Chart(ctu, {
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
    });
}
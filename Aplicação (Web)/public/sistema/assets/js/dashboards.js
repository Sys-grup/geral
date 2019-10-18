
window.onload = function() {
var ctx = document.getElementById('chart-line').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["01/03/2019","02/03/2019","03/03/2019","04/03/2019"],
        datasets: [{
            label: 'Delta',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                
                'rgba(54, 162, 235, 0.2)'
               
            ],
            borderColor: [
                
                'rgba(54, 162, 235, 1)'
                
            ],
            borderWidth: 1
        },
        {
            label: 'Charlie',
            data: [15, 29, 30, 51, 21, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
                
            ],
            borderWidth: 1
        }]
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
            backgroundColor : 'rgba(255, 99, 132, 0.2)',
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
        labels: ["01/03/2019","02/03/2019","03/03/2019","04/03/2019"],
        datasets: [{
<<<<<<< HEAD
            label: 'Delta',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
=======
            label: 'CPU',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#ef88ef',
                '#ef88ef',
                '#ef88ef',
                '#ef88ef',
                
            ],
            borderColor: [
                '#d31dd3',
                '#d31dd3',
                '#d31dd3',
                '#d31dd3',
                
>>>>>>> master
            ],
            borderWidth: 1
        },
        {
<<<<<<< HEAD
            label: 'Charlie',
            data: [15, 29, 30, 51, 21, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
=======
            label: 'RAM',
            data: [15, 29, 30, 51, 21, 32],
            backgroundColor: [
                '#00c8c8',
                '#00c8c8',
                '#00c8c8',
                '#00c8c8',
                
            ],
            borderColor: [
                '#008080',
                '#008080',
                '#008080',
                '#008080',
                
            ],
            borderWidth: 1
        },
        {
            label: 'HD',
            data: [15, 29, 30, 51, 21, 32],
            backgroundColor: [
                '#3ed03e',
                '#3ed03e',
                '#3ed03e',
                '#3ed03e',
 
            ],
            borderColor: [
                '#008000',
                '#008000',
                '#008000',
                '#008000',
                
>>>>>>> master
            ],
            borderWidth: 1
        }]
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
<<<<<<< HEAD
var cty = document.getElementById('chart-pie').getContext('2d');
var myChart1 = new Chart(cty, {
    type: 'pie',
    data: {
        labels: ["Delta","Charlie"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'   
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
=======
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
        labels: ['Delta','Charlie','Alpha','Bravo'],
        datasets: [{
            label: 'Horas',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 99, 132)',
                '#8b4513',
                '#0047ab',
               
                
                
            ],
            borderColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 99, 132)',
                '#8b4513',
                '#0047ab',
                
>>>>>>> master
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
<<<<<<< HEAD
            text: 'Chart.js Line Chart'
=======
            text: 'Semanal'
>>>>>>> master
        },
        tooltips: {
            mode: 'index',
            intersect: false,
<<<<<<< HEAD
=======
            callbacks: {
                label: function(tooltipItem, data) {
                    console.log(tooltipItem);
                    console.log(data);
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += (data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])+'h';
                    return label;
                }
            }
>>>>>>> master
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: false,
                scaleLabel: {
                    display: true,
<<<<<<< HEAD
                    labelString: 'Month'
=======
                    labelString: 'Período'
>>>>>>> master
                }
            }],
            yAxes: [{
                display: false,
                scaleLabel: {
                    display: true,
<<<<<<< HEAD
                    labelString: 'Value'
=======
                    labelString: 'Horas '
>>>>>>> master
                }
            }]
        }
    }
});
}
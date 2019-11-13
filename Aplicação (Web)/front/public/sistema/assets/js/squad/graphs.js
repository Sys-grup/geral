//Configuração dos Gráficos

// Ram

var ram = document.getElementById('chart-line').getContext('2d');

var gRam = new Chart(ram, {
    type: 'line',
    data: {
        labels: ['a','b','c'],
        datasets: [{
            label: "Ram",
            borderColor: "#ad2929",
            data: [5,6,7],
            fill: false,
            pointStyle: 'circle',
            backgroundColor: '#ad2929',
            pointRadius: 4,
            pointHoverRadius: 5,
            lineTension: 0,
        }]
    },
    options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Consumo médio de Ram neste Squad',
            fontSize: 30,
            fontColor: "#ad2929",
            fontFamily: "'ZCOOL XiaoWei', serif",
            fontStyle: "normal"
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }]
        }
    }
});
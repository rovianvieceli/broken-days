import React from 'react'

import Chart from 'chart.js'

export default class Line extends React.Component {
    componentDidMount () {
        new Chart(document.getElementById('chartLine'), {
            type: 'line',
            data: {
                labels: [
                    'Domingo',
                    'Segunda',
                    'Terça',
                    'Quarta',
                    'Quinta',
                    'Sexta',
                    'Sábado'
                ],
                datasets: [{
                    data: [
                        15339,
                        21345,
                        18483,
                        24003,
                        23489,
                        24092,
                        12034
                    ],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#007bff',
                    borderWidth: 3,
                    pointBackgroundColor: '#007bff'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        })
    }

    render () {
        return <canvas className="my-4 w-100" id="chartLine" width="900" height="380"></canvas>
    }
}
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

    @Input() dataset;
    @Input() labels;
    constructor() { }

    ngOnInit(): void {
        var myChart = new Chart("myChart", {
            type: 'pie',
            data: {
                labels: ['China', 'India', 'Bangladesh', 'Iran', 'Pakistan', 'Afghanistan'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(210, 215, 211, 1)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: ['rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    hoverBackgroundColor: '#2E7D32',
                    hoverBorderColor: '#ffffff',
                    hoverBorderWidth: 13
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 15,
                    text: 'Covid 19 Death Rate for South Asian countries'

                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    }

}

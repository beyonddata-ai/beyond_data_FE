import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html',
  styleUrls: ['./narrative.component.css']
})
export class NarrativeComponent implements OnInit {
  myChart: any;
  exchangeRatesChart: any;
  narrative;
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    const data = this.filterService.data;
    const labels = this.filterService.labels;
    const exchangeRatesDataset = this.filterService.exchangeRatesDataset;
    const exchangeRatesLabels = this.filterService.exchangeRatesLabels;
    this.narrative = this.filterService.narrative;
    //assets chart
    this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: data
      },
      options: {
        title: {
          display: true,
          fontSize: 15,
          text: 'Foriegn Currency Assets'

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        animation: {
          duration: 2000,
          easing: 'easeOutCirc'
        }
      }
    });

    //exchangeRates Chart;
    this.exchangeRatesChart = new Chart("exchangeRatesChart", {
      type: 'line',
      data: {
        labels: exchangeRatesLabels,
        datasets: exchangeRatesDataset
      },
      options: {
        title: {
          display: true,
          fontSize: 15,
          text: 'Exchange Rates'

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },

        animation: {
          duration: 1000,
          easing: 'easeOutCirc'
        }
      }
    });



    console.log(exchangeRatesDataset, exchangeRatesLabels)
  }

}

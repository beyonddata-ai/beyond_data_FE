import { Component, OnInit, ElementRef } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Chart } from 'node_modules/chart.js';
import { Router } from '@angular/router';
import { NarrativeService } from '../services/narrative.service';



@Component({
  selector: 'app-filter-inputs',
  templateUrl: './filter-inputs.component.html',
  styleUrls: ['./filter-inputs.component.css']
})
export class FilterInputsComponent implements OnInit {
  //Arrays of data for filters
  sectors = [];
  companies = [];
  narrativeTypes = [];
  sections = []
  referencingYears = [];
  referencedYears = [];

  chart;

  //selected data to be passed to the api for querying the database.
  selectedSector: string;
  selectedCompany;
  selectedNarrativeType;
  selectedSection;
  selectedReferencingYear;
  selectedReferencedYear;
  yearsToReturn = []
  selectedSectorModified

  //plain narrative text
  narrative;
  //data coming alongside narrative
  narrativeData;

  //Deposits Narrative's (not plain text, containing nested objects) customers and financial institutions objects
  depNarrativeCustomers;
  depNarrativeFinInst;
  //Keys of deposits narrative's customers and financial institutions objects
  depNarrativeCustomersKeys
  depNarrativeFinInstKeys;

  displayChart = false;

  //errorMessage
  errorMessage;

  constructor(
    private filterService: FilterService, 
    private router: Router, 
    private narrativeService: NarrativeService) { }

  ngOnInit(): void {
    this.filterService.getSectors().subscribe((resp) => {
      for (let res of resp.sectors) {
        this.sectors.push(res);
      }
      console.log(this.sectors);
    })
  }

  getCompany() {
    if (this.selectedSector.includes("&")) {
      this.selectedSectorModified = this.selectedSector.replace(/&/g, "%26");
      console.log("includes")
    } else {
      this.selectedSectorModified = this.selectedSector;
    }

    console.log(this.selectedSectorModified);
    this.filterService.getCompany(this.selectedSectorModified).subscribe((resp) => {
      console.log(resp);
      for (let res of resp.sectors) {
        this.companies.push(res);
      }
      console.log(this.companies);
    })
  }

  getNarrativeType() {
    this.filterService.getNarrativeType(this.selectedSectorModified).subscribe((resp) => {
      console.log(resp);
      for (let res of resp.sectors) {
        this.narrativeTypes.push(res);
      }
      console.log(this.narrativeTypes);
    })
  }

  getSection() {
    this.filterService.getSection(this.selectedSectorModified, this.selectedNarrativeType).subscribe((resp) => {
      for (let res of resp.sections) {
        this.sections.push(res);
      }
      console.log(this.sections);
    })
  }

  getReferencingYear() {
    this.filterService.getReferencingYear(this.selectedSectorModified, this.selectedNarrativeType, this.selectedCompany, this.selectedSection)
      .subscribe((resp) => {
        for (let res of resp.referencing_years) {
          this.referencingYears.push(res);
        }
        console.log(this.referencingYears);

        for (let res of resp.years) {
          this.yearsToReturn.push(res)
        }
        console.log(this.yearsToReturn);
      })
  }

  getReferencedYear() {
    this.filterService.getReferencedYear(this.selectedReferencingYear, this.yearsToReturn).subscribe((resp) => {
      for (let res of resp.referenced_years) {
        this.referencedYears.push(res);
      }
    })
  }

  assetsDataRaw;
  exchange_ratesDataRaw = []
  assetsData1 = []
  assetsData2 = []
  dataSet = []
  labels;
  borderColors = ['#4527A0', '#0277BD', '#AD1457', '#424242', '#4CAF50']
  backgroundColors = ['#4527A0', '#0277BD', '#AD1457', '#424242', '#4CAF50']


  getResults() {
    //storing variables in service
      this.narrativeService.selectedSector = this.selectedSector;
      this.narrativeService.selectedCompany = this.selectedCompany;
      this.narrativeService.selectedSection = this.selectedSection;
      this.narrativeService.selectedReferencingYear = this.selectedReferencingYear;
      this.narrativeService.selectedReferencedYear = this.selectedReferencedYear;

    //Director's Report API called and preprocessing done here.
    if (this.selectedNarrativeType === "Director Report") {
      this.filterService.getResults(this.selectedSectorModified, this.selectedCompany, this.selectedSection, this.selectedReferencingYear, this.selectedReferencedYear)
        .subscribe((resp) => {
          if (this.selectedSection === "Deposits") {
            console.log("Deposits Processing");
            this.depNarrativeCustomers = resp.narrative.customers
            this.depNarrativeFinInst = resp.narrative["financial institutions"];
            this.depNarrativeCustomersKeys = Object.keys(resp.narrative.customers);
            this.depNarrativeFinInstKeys = Object.keys(this.depNarrativeFinInst);
          } else if (this.selectedSection === "Dupont Analysis") {
            console.log("Dupont Analysis Processing");
            this.narrativeData = Object.entries(resp.data);
            this.narrative = resp.narrative;
            console.log(this.narrativeData);
          }
          else if (this.selectedSection === "Risk Analysis" && this.selectedSector === "bank") {
            //preprocessing assets
            const assets = resp.data.assets;
            this.assetsDataRaw = Object.entries(assets);
            console.log(this.assetsDataRaw, "assets")
            const dataSet = []
            for (let i = 0; i < this.assetsDataRaw.length - 1; i++) {
              const data = {
                label: this.assetsDataRaw[i][0],
                data: this.assetsDataRaw[i][1],
                borderColor: this.borderColors[i],
                backgroundColor: this.backgroundColors[i],
                fill: false
              }
              dataSet.push(data);
            }
            const n = this.assetsDataRaw.length;
            const labels = this.assetsDataRaw[n - 1][1];
            this.filterService.narrative = resp.narrative;
            this.filterService.data = dataSet;
            this.filterService.labels = labels;

            //pre processing exchange_rates
            const exchange_rates = resp.data.exchange_rates;
            const exchange_ratesLabels = exchange_rates["fiscal year"];
            delete exchange_rates["fiscal year"];
            this.exchange_ratesDataRaw = Object.entries(exchange_rates);
            console.log(this.exchange_ratesDataRaw, "exchangeRates(deleted fiscal year)");
            const dataSetExchange_rates = []
            for (let i = 0; i < this.exchange_ratesDataRaw.length; i++) {
              const data = {
                label: this.exchange_ratesDataRaw[i][0],
                data: this.exchange_ratesDataRaw[i][1],
                borderColor: this.borderColors[i],
                backgroundColor: this.backgroundColors[i],
                fill: false
              }
              dataSetExchange_rates.push(data);
            }

            this.filterService.exchangeRatesDataset = dataSetExchange_rates;
            this.filterService.exchangeRatesLabels = exchange_ratesLabels;
            console.log(dataSetExchange_rates);
            this.router.navigateByUrl('narrative');
          } else {
            console.log(resp)
          }
        },
        (error) => {
          this.errorMessage = error
        }
        )
    } 
    //Balance Sheet Api called, preprocessing done inside narrativeService
    else if (this.selectedNarrativeType === "Balance Sheet") {
          this.narrativeService.getBalanceSheetNarrative(this.selectedSector, this.selectedCompany, this.selectedSection, this.selectedReferencingYear, this.selectedReferencedYear )
          .subscribe((resp) => {
            console.log(resp)
           this.router.navigateByUrl('balancesheetnarrative');
           },
          (error) => {
            this.errorMessage = error
          }
          )
    }
  }

}

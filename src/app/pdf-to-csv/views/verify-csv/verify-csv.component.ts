import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { TableExtractionService } from 'src/app/services/table-extraction.service';
import { TableHeaderCheckbox } from 'primeng/table';
//const get = require('foo');

@Component({
  selector: 'app-verify-csv',
  templateUrl: './verify-csv.component.html',
  styleUrls: ['./verify-csv.component.css']
})
export class VerifyCsvComponent implements OnInit {

  extractedData1;
  extractedData2;

  //images of the extractedData1 and extractedData2
  image1;
  image2;

  //final preprocessed Datasource of extractedData1 and extractedData2
  rows = []
  rows2 = []


  extractedData1Array;
  extractedData2Array;
  tableHeader = []
  tableHeader2 = []

  isNextPageChecked: boolean;


  constructor(private tableExtractionService: TableExtractionService) { }

  ngOnInit(): void {

    const csv_s = this.tableExtractionService.extractedData;
    const images = this.tableExtractionService.extractedImagesCropped;
    this.isNextPageChecked = this.tableExtractionService.isNextChecked;

    //saving csv data withing component from the service, 
    //also checking if returned data is single csv or double csv
    if (csv_s.length == 1) {
      this.extractedData1 = csv_s[0]
    } else if (csv_s.length == 2) {
      this.extractedData1 = csv_s[0]
      this.extractedData2 = csv_s[1]
    }

    if (images.length == 1) {
      this.image1 = images[0];
    } else if (images.length == 2) {
      this.image1 = images[0];
      this.image2 = images[1];
    }

    //keys of data1
    var keys = Object.keys(this.extractedData1)
    this.tableHeader = keys;

    //keys of data2
    if (csv_s.length == 2) {
      var keys2 = Object.keys(this.extractedData2)
      this.tableHeader2 = keys2;
    }

    //creating array of col data of data1
    this.extractedData1Array = Object.values(this.extractedData1);

    //creating array of col data of data2
    if (csv_s.length == 2) {
      this.extractedData2Array = Object.values(this.extractedData2);
    }

    //creating final processed Datasource of extractedData1
    const noRows = this.extractedData1Array[0].length;
    for (let i = 0; i < noRows; i++) {
      this.rows[i] = {}
      keys.forEach((key) => {
        this.rows[i][key] = this.extractedData1Array[key][i];
      })

    }

    //creating final processed Datasource of extractedData2
    if (csv_s.length == 2) {
      const noRows2 = this.extractedData2Array[0].length;
      for (let i = 0; i < noRows2; i++) {
        this.rows2[i] = {}
        keys2.forEach((key2) => {
          this.rows2[i][key2] = this.extractedData2Array[key2][i];
        })
      }
    }

    console.log(this.rows);
    console.log(this.rows2)
  }


  newRow(i) {
    const row = {};
    const index = i+1;
    for (let header of this.tableHeader) {
      row[header] = '';
    }
  //  const dataToReturn = {row2, i}
  //    return dataToReturn;
  this.rows.splice(index, 0, row);
  }


  newRow2(i) {
    const row2 = {};
    const index = i+1
    for (let header of this.tableHeader2) {
      row2[header] = '';
    }
    this.rows2.splice(index, 0, row2)
  }

  verifyCsv() {
    if(this.isNextPageChecked == true) {
        const joinedData = this.rows.concat(this.rows2);
        console.log(joinedData);
        console.log("next is checked. join the data")
    } else 
      {
        
        console.log(this.rows);
        console.log(this.rows2);
        console.log("next is not checked. Do not join the data")
      }
    // console.log(this.rows);
    // console.log(this.rows2);
    console.log(this.isNextPageChecked);
  }

  consoleIndex(i) {
    console.log(i);
  }
}

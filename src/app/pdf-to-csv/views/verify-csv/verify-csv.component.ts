import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { TableExtractionService } from 'src/app/services/table-extraction.service';
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
  colData1 = [
  ]



  tableHeader = []
  tableHeader2 = []

  constructor(private tableExtractionService: TableExtractionService) { }



  ngOnInit(): void {
    // var keys = Object.keys(this.data2[0])
    // console.log(keys);
    // this.tableHeader = keys;

    // for (let dat of this.data) {
    //   console.log(dat.Month)
    // }



    const csv_s = this.tableExtractionService.extractedData;
    const images = this.tableExtractionService.extractedImagesCropped;


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
    console.log(this.extractedData1, "1st data")
    //console.log(this.image1, "1st image")
    // console.log(this.extractedData2, "2nd data")
    // console.log(this.image2, "2nd image")

    //keys of data1
    var keys = Object.keys(this.extractedData1)
    this.tableHeader = keys;

    //keys of data2
    if (csv_s.length == 2) {
      var keys2 = Object.keys(this.extractedData2)
      this.tableHeader2 = keys2;
    }



    //console.log(this.tableHeader)
    //console.log(this.tableHeader);

    //creating array of col data of data1
    this.extractedData1Array = Object.values(this.extractedData1);

    //creating array of col data of data2
    if (csv_s.length == 2) {
      this.extractedData2Array = Object.values(this.extractedData2);
    }


    // for(let dat of this.extractedData1Array) {
    //     this.colData1.push(dat[1]);
    // }
    // console.log(this.colData1)
    // console.log(this.colData1[0]);

    //console.log(get(this.extractedData1, 'a'));

    // for(let arr of this.extractedData1Array) {
    //     for(let i=0; i<arr.length; arr++) {
    //       this.rowData[i] = arr[i];
    //     }     
    // }

    // console.log(this.rowData);

    //creating final processed Datasource of extractedData1
    const noRows = this.extractedData1Array[0].length;
    for (let i = 0; i < noRows; i++) {
      this.rows[i] = {}
      keys.forEach((key) => {
        this.rows[i][key] = this.extractedData1Array[key][i];
      })
      //console.log(this.rows);
    }

    //creating final processed Datasource of extractedData2
    if (csv_s.length == 2) {
      const noRows2 = this.extractedData2Array[0].length;
      for (let i = 0; i < noRows2; i++) {
        this.rows2[i] = {}
        keys2.forEach((key2) => {
          this.rows2[i][key2] = this.extractedData2Array[key2][i];
        })
        console.log(this.rows2)
      }
    }
  }

}

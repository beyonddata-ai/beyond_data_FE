import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-csv',
  templateUrl: './verify-csv.component.html',
  styleUrls: ['./verify-csv.component.css']
})
export class VerifyCsvComponent implements OnInit {

  data = [
    {
      "1958": 340,
      "1959": 360,
      "1960": 417,
      "Month": "JAN"
    },
    {
      "1958": 318,
      "1959": 342,
      "1960": 391,
      "Month": "FEB"
    },
    {
      "1958": 362,
      "1959": 406,
      "1960": 419,
      "Month": "MAR"
    },
    {
      "1958": 348,
      "1959": 396,
      "1960": 461,
      "Month": "APR"
    },
    {
      "1958": 363,
      "1959": 420,
      "1960": 472,
      "Month": "MAY"
    },
    {
      "1958": 435,
      "1959": 472,
      "1960": 535,
      "Month": "JUN"
    },
    {
      "1958": 491,
      "1959": 548,
      "1960": 622,
      "Month": "JUL"
    },
    {
      "1958": 505,
      "1959": 559,
      "1960": 606,
      "Month": "AUG"
    },
    {
      "1958": 404,
      "1959": 463,
      "1960": 508,
      "Month": "SEP"
    },
    {
      "1958": 359,
      "1959": 407,
      "1960": 461,
      "Month": "OCT"
    },
    {
      "1958": 310,
      "1959": 362,
      "1960": 390,
      "Month": "NOV"
    },
    {
      "1958": 337,
      "1959": 405,
      "1960": 432,
      "Month": "DEC"
    }
  ]

  tableHeader = []

  constructor() { }



  ngOnInit(): void {
    var keys = Object.keys(this.data[0])
    console.log(keys);
    this.tableHeader = keys;

    for(let dat of this.data){
      console.log(dat.Month)
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TableExtractionService } from 'src/app/services/table-extraction.service';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
 
  userInput = {
    file: '',
    
    doublePage: false,
    nextPage: false,
  }

  pageNumber: number;
 
  // doublePage = false
  // nextPage = false;
  // file;
  // PageNumber;

  constructor(private tableExtractionService: TableExtractionService) { }

  ngOnInit(): void {
  }

  saveFile(event) {
    console.log(event.target.files[0])
    this.userInput.file = event.target.files[0];
   
  }

  upload () {
    this.tableExtractionService.fileUpload(this.userInput.file, this.pageNumber, this.userInput.doublePage, this.userInput.nextPage).subscribe( (resp:any)=> {
      console.log(resp)
    }
    )
  }
}

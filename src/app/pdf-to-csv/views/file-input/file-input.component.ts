import { Component, OnInit } from '@angular/core';
import { TableExtractionService } from 'src/app/services/table-extraction.service';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
  double_page = false
  next_page = false;
  file;
  page_no;

  constructor(private tableExtractionService: TableExtractionService) { }

  ngOnInit(): void {
  }

  saveFile(event) {
  //  console.log(event.target.files[0])
    this.file = event.target.files[0];
  }

  onSubmit() {
    // this.tableExtractionService.fileUpload( this.file, this.page_no, this.double_page, this.next_page ).subscribe((resp: any) => {
    //   console.log(resp)
    // }
    console.log(this.file, this.page_no, this.double_page, this.next_page)
    
  }
}
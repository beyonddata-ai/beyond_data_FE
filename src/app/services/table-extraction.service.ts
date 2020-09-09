import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableExtractionService {
  base64Images = [];
  fileUploadUrl = 'http://127.0.0.1:8000/tableExtraction/uploadReport';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  extractedData = []
  extractedImagesCropped = []


  constructor(private http: HttpClient) { }

  fileUpload(file, page_no, double_page, next_page): Observable<any> {
    //const url = `${this.fileUploadUrl}?file=${file}&page_no=${pageNo}&double_page=${doublePage}&next_page=${nextPage}`;
    return this.http.post(this.fileUploadUrl, {file, page_no, double_page, next_page})
    .pipe(tap(resp=>{
      for(let res of resp.result) {
        this.base64Images.push(res);
        //console.log(res);
      }
      //console.log(this.base64Images)
    }))
  }

  doubleImageCrop(image1, image2) {
   return this.http.post("http://127.0.0.1:8000/tableExtraction/extractCSV", {image1, image2}).pipe(tap((resp: any) => {
   // console.log(resp.result.csv);
    for(let csv of resp.result.csv){
      this.extractedData.push(csv);
    }
    console.log(this.extractedData);
    for(let image of resp.result.images) {
      this.extractedImagesCropped.push(image);
    }
    console.log(this.extractedImagesCropped);
  })) 
}
  
  singleImageCrop(image1) {
   return this.http.post("http://127.0.0.1:8000/tableExtraction/extractCSV", {image1}).pipe(tap((resp: any) => {
     // console.log(resp.result.csv);
      for(let csv of resp.result.csv){
        this.extractedData.push(csv);
      }
      console.log(this.extractedData);
      
      for(let image of resp.result.images) {
        this.extractedImagesCropped.push(image);
      }
      console.log(this.extractedImagesCropped);
   }))
  }
}


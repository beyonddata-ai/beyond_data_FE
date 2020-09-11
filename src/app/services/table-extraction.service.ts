import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableExtractionService {
  //returned image/images on file upload
  base64Images = [];

  //returned extractedData/data's and cropped image/images, after Images are Cropped in imagecrop component
  extractedData = []
  extractedImagesCropped = []
  isNextChecked;

  //url for uploadreport API
  fileUploadUrl = 'http://127.0.0.1:8000/tableExtraction/uploadReport';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  fileUpload(file, page_no, double_page, next_page): Observable<any> {
    this.isNextChecked = next_page;
    return this.http.post(this.fileUploadUrl, {file, page_no, double_page, next_page})
    .pipe(tap(resp=>{
      for(let res of resp.result) {
        this.base64Images.push(res); 
      } 
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


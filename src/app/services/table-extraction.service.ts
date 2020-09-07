import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableExtractionService {
  fileUploadUrl = 'http://127.0.0.1:8000/tableExtraction/uploadReport';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  fileUpload(file, page_no, double_page, next_page): Observable<any> {
    //const url = `${this.fileUploadUrl}?file=${file}&page_no=${pageNo}&double_page=${doublePage}&next_page=${nextPage}`;
    return this.http.post(this.fileUploadUrl, {file, page_no, double_page, next_page})
  }

}


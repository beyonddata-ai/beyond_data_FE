import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  data;
  labels;
  exchangeRatesDataset;
  exchangeRatesLabels;
  narrative;

  url = "http://127.0.0.1:8000/get_filters";
  directorReportUrl = "http://127.0.0.1:8000/dr_narrative";
  balanceSheertUrl = "http://127.0.0.1:8000/bs_narrative";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getSectors(): Observable<any> {
    return this.http.get(`${this.url}?input_type=sector&sector=none`)
  }

  getCompany(selectedSector): Observable<any> {
    return this.http.get(`${this.url}?input_type=company&sector=${selectedSector}`);
  }

  getNarrativeType(selectedSector): Observable<any> {
    return this.http.get(`${this.url}?input_type=narrative type&sector=${selectedSector}`);
  }

  getSection(selectedSector, selectedNarrativeType): Observable<any> {
    return this.http.get(`${this.url}?input_type=section&sector=${selectedSector}&narrative_type=${selectedNarrativeType}`)
  }

  getReferencingYear(selectedSector, selectedNarrativeType, selectedCompany, selectedSection): Observable<any> {
    return this.http.get(`${this.url}?input_type=referencing year&sector=${selectedSector}&narrative_type=${selectedNarrativeType}&company=${selectedCompany}&section=${selectedSection}`)
  }

  getReferencedYear(selectedReferencingYear, yearsToReturn): Observable<any> {
    return this.http.get(`${this.url}?input_type=referenced year&referencing_year=${selectedReferencingYear}&years=[${yearsToReturn}]`)
  }

  getResults(selectedSector, selectedCompany, selectedSection, selectedReferencingYear, selectedReferencedYear): Observable<any> {
    return this.http.get(`${this.directorReportUrl}?sector=${selectedSector}&company=${selectedCompany}&section=${selectedSection}&referencing_year=${selectedReferencingYear}&referenced_year=${selectedReferencedYear}`)
    .pipe(catchError(this.errorHandler))
  }

  getBalanceSheetNarrative(selectedSector, selectedCompany, selectedSection, selectedReferencingYear, selectedReferencedYear): Observable<any> {
    return this.http.get(`${this.balanceSheertUrl}?sector=${selectedSector}&company=${selectedCompany}&section=${selectedSection}&referencing_year=${selectedReferencingYear}&referenced_year=${selectedReferencedYear}`)
  }

  errorHandler(error) {
    return throwError ("Director's Report data not found")
  }

}

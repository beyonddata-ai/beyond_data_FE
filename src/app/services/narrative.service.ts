import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NarrativeService {

  selectedSector;
  selectedCompany;
  selectedSection;
  selectedReferencingYear;
  selectedReferencedYear;

  //Results Balance Sheet's narrative
  headers;
  narrativeToDisplay;
  //All narrative Preprocessing Banks
  assetsNarrative;
  assetsHeader;
  LiabilitiesHeader;
  LiabilitiesNarrative;

  //All narrative preprocessing 

  balanceSheertUrl = "http://127.0.0.1:8000/bs_narrative";
  constructor(private http: HttpClient) { }


  //BalanceSheetNarrative Api call and response preprocessing for all sectors.
  getBalanceSheetNarrative(selectedSector, selectedCompany, selectedSection, selectedReferencingYear, selectedReferencedYear): Observable<any> {
    return this.http.get(`${this.balanceSheertUrl}?sector=${selectedSector}&company=${selectedCompany}&section=${selectedSection}&referencing_year=${selectedReferencingYear}&referenced_year=${selectedReferencedYear}`)
    .pipe(tap((resp)=> {
      if(this.selectedSector === "bank") {
      if(this.selectedSection === "All") {
        this.headers = Object.keys(resp);
        console.log(resp, "all selected");
        this.assetsNarrative = resp.assets;
        this.LiabilitiesNarrative = resp.liabilities;
        console.log(this.headers, "narrative");
        this.assetsHeader = this.headers[0];
        this.LiabilitiesHeader = this.headers[1];
      } else {

              this.narrativeToDisplay = resp;
              console.log(resp);
      }
    } else if (this.selectedSector === "o&g_exploration") {
        if(this.selectedSection === "All") {

        }
      else {
        this.narrativeToDisplay = resp;
      }
    } else if(this.selectedSector === "o&g_marketing") {
      if(this.selectedSection === "All") {

      } else {
        this.narrativeToDisplay = resp;
      }
    } else if(this.selectedSector === "o&g_refinery") {
      if(this.selectedSection === "All") {

      } else {
        this.narrativeToDisplay = resp;
      }
    }
      
    }),
    catchError(this.errorHandler)
    )
  }



  //error handler function
  errorHandler(error) {
    return throwError ("BalanceSheet Data not found")
  }

}

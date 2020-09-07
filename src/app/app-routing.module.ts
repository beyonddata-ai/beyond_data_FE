import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterInputsComponent } from './filter-inputs/filter-inputs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pdftocsv',
    pathMatch: 'full'
  },
  {
    path: 'pdftocsv',
    loadChildren: () => import('./pdf-to-csv/pdf-to-csv.module').then(m => m.PdfToCsvModule)
  },
  {
    path: 'filter',
    component: FilterInputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

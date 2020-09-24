import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BalancesheetNarrativeComponent } from './balancesheet-narrative/balancesheet-narrative.component';
import { ChartsComponent } from './charts/charts.component';
import { DataMapPakistanComponent } from './data-map-pakistan/data-map-pakistan.component';
import { DataMapComponent } from './data-map/data-map.component';
import { FilterInputsComponent } from './filter-inputs/filter-inputs.component';
import { MapComponent } from './map/map.component';
import { NarrativeComponent } from './narrative/narrative.component';


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
  },
  {
    path: 'chart',
    component: ChartsComponent
  },
  {
    path: 'narrative',
    component: NarrativeComponent
  },
  {
    path: 'balancesheetnarrative',
    component: BalancesheetNarrativeComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'datamap',
    component: DataMapComponent
  },
  {
    path: 'datamappakistan',
    component: DataMapPakistanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

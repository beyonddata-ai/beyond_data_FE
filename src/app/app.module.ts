import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule }    from '@angular/common/http';
import { FilterInputsComponent } from './filter-inputs/filter-inputs.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {TableModule} from 'primeng/table';
import { ChartsComponent } from './charts/charts.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { BalancesheetNarrativeComponent } from './balancesheet-narrative/balancesheet-narrative.component';
import { MapComponent } from './map/map.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataMapComponent } from './data-map/data-map.component';
import { DataMapPakistanComponent } from './data-map-pakistan/data-map-pakistan.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterInputsComponent,
    ChartsComponent,
    NarrativeComponent,
    BalancesheetNarrativeComponent,
    MapComponent,
    DataMapComponent,
    DataMapPakistanComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    TableModule,
    NgSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToCsvRoutingModule } from './pdf-to-csv-routing.module';
import { PdfToCsvComponent } from './pdf-to-csv.component';
import { FileInputComponent } from './views/file-input/file-input.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ImageCropComponent } from './views/image-crop/image-crop.component'
import { ImageCropperModule } from 'ngx-image-cropper';
import { VerifyCsvComponent } from './views/verify-csv/verify-csv.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PdfToCsvComponent,
    FileInputComponent,
    ImageCropComponent,
    VerifyCsvComponent
  ],

  imports: [
    CommonModule,
    PdfToCsvRoutingModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    ImageCropperModule,
    MatGridListModule,
    HttpClientModule
    
  ]
})
export class PdfToCsvModule { }

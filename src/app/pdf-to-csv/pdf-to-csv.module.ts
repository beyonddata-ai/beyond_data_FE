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
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    PdfToCsvComponent,
    FileInputComponent,
    ImageCropComponent,
    VerifyCsvComponent,
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
    TableModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ProgressBarModule
    
  ]
})
export class PdfToCsvModule { }

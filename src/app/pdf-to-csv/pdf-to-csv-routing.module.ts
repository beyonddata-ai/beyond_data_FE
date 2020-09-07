import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfToCsvComponent } from './pdf-to-csv.component';
import { FileInputComponent } from './views/file-input/file-input.component';
import { PdfToCsvModule } from './pdf-to-csv.module';
import { ImageCropComponent } from './views/image-crop/image-crop.component';
import { VerifyCsvComponent } from './views/verify-csv/verify-csv.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fileinput',
    pathMatch: 'full'
  },
  {
    path: 'fileinput',
    component: FileInputComponent
  },
  {
    path: 'crop',
    component: ImageCropComponent
  },
  {
    path: 'verifycsv',
    component: VerifyCsvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToCsvRoutingModule { }

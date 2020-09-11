import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { TableExtractionService } from 'src/app/services/table-extraction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {
  images = [];
  image_1;
  image_2;
  image2: string;
  image1: string;
  isLoading = false;

  imageChangedEvent: any = '';
  croppedImages: any = []

  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;


  fileChangeEvent(event: any): void {
     this.imageChangedEvent = event;   
  }

  image1Cropped(event: ImageCroppedEvent) {
      this.image1 = event.base64;
      console.log(this.image1);
  }

  image2Cropped(event: ImageCroppedEvent) {
    this.image2 = event.base64;
    console.log(this.image2);
  }



  imageLoaded() {
      this.showCropper = true;
      console.log('Image loaded');
  }


  loadImageFailed() {
      console.log('Load failed');
  }
  constructor(private tableExtractionService: TableExtractionService, private router: Router) { }

  ngOnInit(): void {
    const base64Images = this.tableExtractionService.base64Images;
    console.log(base64Images);
    // for(let image of base64Images) {
    //   this.images.push("data:image/jpeg;base64,"+image);
    // }
    if(base64Images.length == 1) {
      this.image_1 = "data:image/jpeg;base64,"+base64Images[0];
    } else if(base64Images.length == 2) {
      this.image_1 = "data:image/jpeg;base64,"+base64Images[0];
      this.image_2 = "data:image/jpeg;base64,"+base64Images[1];
    }
  }
  
onCropped() {
    this.isLoading = true;
    if(this.image2) {
      this.tableExtractionService.doubleImageCrop(this.image1, this.image2).subscribe((resp:any)=>{
        this.isLoading = false
        console.log(resp)
        this.router.navigateByUrl('pdftocsv/verifycsv');
      })
      console.log( "1")
    } else {
      
      this.tableExtractionService.singleImageCrop(this.image1).subscribe((resp:any)=>{
        //console.log(resp)
        this.isLoading = false
        this.router.navigateByUrl('pdftocsv/verifycsv');

      })
      console.log( "2")
    }
}

}

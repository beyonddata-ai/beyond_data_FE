import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { TableExtractionService } from 'src/app/services/table-extraction.service';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {
  images = [];
  image1;
  image2;
  image2cropped: string;
  image1cropped: string;

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
      this.image1cropped = event.base64;
      console.log(this.image1cropped);
  }

  image2Cropped(event: ImageCroppedEvent) {
    this.image2cropped = event.base64;
    console.log(this.image2cropped);
  }



  imageLoaded() {
      this.showCropper = true;
      console.log('Image loaded');
  }


  loadImageFailed() {
      console.log('Load failed');
  }
  constructor(private tableExtractionService: TableExtractionService) { }

  ngOnInit(): void {
    const base64Images = this.tableExtractionService.base64Images;
    console.log(base64Images);
    // for(let image of base64Images) {
    //   this.images.push("data:image/jpeg;base64,"+image);
    // }
    if(base64Images.length == 1) {
      this.image1 = "data:image/jpeg;base64,"+base64Images[0];
    } else if(base64Images.length == 2) {
      this.image1 = "data:image/jpeg;base64,"+base64Images[0];
      this.image2 = "data:image/jpeg;base64,"+base64Images[1];
    }
  }
  
onCropped() {
    if(this.image2cropped) {
      this.tableExtractionService.doubleImageCrop(this.image1cropped, this.image2cropped).subscribe((resp:any)=>{

      })
      console.log( "1")
    } else {
      this.tableExtractionService.singleImageCrop(this.image1).subscribe((resp:any)=>{
        
      })
      console.log( "2")
    }
}

}

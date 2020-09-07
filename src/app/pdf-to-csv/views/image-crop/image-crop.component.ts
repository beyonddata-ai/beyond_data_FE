import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {
  images = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';

  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;


  fileChangeEvent(event: any): void {
     this.imageChangedEvent = event;   
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }

  imageLoaded() {
      this.showCropper = true;
      console.log('Image loaded');
  }


  loadImageFailed() {
      console.log('Load failed');
  }
  constructor() { }

  ngOnInit(): void {
  }

}

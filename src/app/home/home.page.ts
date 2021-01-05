import { DownloadService } from './../services/download.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageToShow: any;
  isImageLoading = true;
  constructor(
    public image: DownloadService,
    public storage: Storage,
    public router: Router
  ) { }

  buttonClick() {
    this.isImageLoading = true;
    this.image.downloadImage().subscribe((data: any) => {
      console.log('dowload image', data);
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, err => {
      this.isImageLoading = false;
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log('createImageFromBlob', reader.result);
      this.imageToShow = reader.result;
      this.storage.set('image', reader.result)
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  next() {
    this.router.navigateByUrl('/two')
  }
}

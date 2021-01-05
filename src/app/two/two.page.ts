import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage implements OnInit {
  imageToShow: any;
  constructor(public storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getImage();
  }

  async getImage() {
    const image = await this.storage.get('image');
    console.log('geTImage', image);
    this.imageToShow = image;
  }

}

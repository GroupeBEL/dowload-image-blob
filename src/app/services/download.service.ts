import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(public http: HttpClient) { }
  // https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg
  downloadImage() {
    return this.http.get('https://preprod-bread-wallah.groupe-bel.com/storage/app/categories/5ff4851c5d8b8-badge%202.PNG', { responseType: 'blob' });
  }
}

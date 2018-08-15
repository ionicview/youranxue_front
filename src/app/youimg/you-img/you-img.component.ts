import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'mdb-you-img',
  templateUrl: './you-img.component.html',
  styleUrls: ['./you-img.component.scss']
})
export class YouImgComponent implements OnInit {

  @Input() src: string;
  constructor() { }

  ngOnInit() {
    if (!this.src) {
      return;
    }

    if (!this.src.startsWith('http')) {
      console.log('API_URL:' + environment.apiUrl);

      this.src = environment.apiUrl.concat('/').concat(this.src);
      console.log('SRC:' + this.src);
    }

  }

}

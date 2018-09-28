import { ActsResultService } from './../../services/acts/acts-result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdb-app-acts-header',
  templateUrl: './acts-header.component.html',
  styleUrls: ['./acts-header.component.scss']
})
export class ActsHeaderComponent implements OnInit {
  colums: string[];
  points: number[];

  constructor(private actsResultService: ActsResultService) {
  }

  ngOnInit() {
    this.actsResultService.getHeaderData().subscribe((res: any) => {
      console.log('get header data' + res);
      this.colums = res['colums'];
      this.points = res['points'];
    });
  }
}

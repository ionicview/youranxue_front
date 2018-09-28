import { ActsResultService } from 'app/services/acts/acts-result.service';
import { Component, OnInit } from '@angular/core';
import { ChartTestVo } from './../../model/test/chart.test.vo';

@Component({
  selector: 'mdb-app-acts-charts',
  templateUrl: './acts-charts.component.html',
  styleUrls: ['./acts-charts.component.scss']
})
export class ActsChartsComponent implements OnInit {

  charts: any[] = [];
  chartType: string;

  constructor(private actsResultService: ActsResultService) {
    this.chartType = 'radar';
  }
  ngOnInit() {
    this.actsResultService.getChartsData().subscribe((res: ChartTestVo[]) => {
      res.forEach(chartTestVo => {
        const chartDatasets = Array<any>();
        let result: any = {};

        chartTestVo.chartDatasets.forEach(chartData => {
          chartDatasets.push({
            'data': chartData.data,
            'label': chartData.label
          });
          result = {
            'category': chartTestVo.category,
            'chartDatasets': chartDatasets
          }

        })
        this.charts.push(result);
      });
    })
  }
}

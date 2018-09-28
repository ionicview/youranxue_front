import { Component, OnInit } from '@angular/core';
import { ActsResultService } from 'app/services/acts/acts-result.service';
import { ChartTestVo } from './../../model/test/chart.test.vo';

@Component({
  selector: 'mdb-app-acts-result',
  templateUrl: './acts-result.component.html',
  styleUrls: ['./acts-result.component.scss']
})

export class ActsResultComponent implements OnInit {

  chartType: string[] = ['radar', 'radar', 'polarArea'];
  charts: any[] = [];

  constructor(private actsResultService: ActsResultService) {
  }

  ngOnInit() {

    // charts
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
    // graph
    // TODO same with charts
  }
}


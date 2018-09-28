import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdb-app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @Input() public chartType = 'radar';
  @Input() public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];
  @Input()
  public chartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7'];

  @Input()
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.3)',
      borderColor: 'rgba(220,220,220,0.4)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
    {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
    console.log(e);
    console.log(e.active);
  }
  // constructor() { }
  ngOnInit() {
    console.log(this.chartType);
    console.log(this.chartDatasets);
  }

}

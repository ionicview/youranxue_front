import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-resources',
  templateUrl: './all-resources.component.html',
  styleUrls: ['./all-resources.component.scss']
})
export class AllResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nodes = [
    {
      id: 1,
      name: '第一单元',
      children: [
        { id: 2, name: '1.1 集合' },
        { id: 3, name: '1.2 小测验' }
      ]
    },
    {
      id: 4,
      name: '第二单元',
      children: [
        { id: 5, name: '2.1 勾股定理' },
        {
          id: 6,
          name: '2.1.1 定义',
          children: [
            { id: 7, name: '2.1.1.1 应用' }
          ]
        }
      ]
    }
  ];
  options = {};
}

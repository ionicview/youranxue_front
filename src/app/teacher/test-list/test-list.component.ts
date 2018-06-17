import { Component, OnInit } from '@angular/core';
import { TestViewVO } from '../../model/test/test.view.vo';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'mdb-app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  testList: Array<TestViewVO>;
  constructor(private testService: TestService) { }

  ngOnInit() {

    this.testService.getAllTestByBookId(1001).subscribe((tests: Array<TestViewVO>) => {
      this.testList = tests;

    });
  }
}

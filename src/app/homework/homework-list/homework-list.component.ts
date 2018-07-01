import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../services/homework/homework.service';
import { HomeworkViewVO } from '../../model/homework/homework.view.vo';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.scss']
})
export class HomeworkListComponent implements OnInit {

  homeworkList: Array<HomeworkViewVO>;
  constructor(private homeworkService: HomeworkService) { }

  ngOnInit() {

    this.homeworkService.getAllHomeworkList().subscribe((homeworks: Array<HomeworkViewVO>) => {
      this.homeworkList = homeworks;

    });
  }

}

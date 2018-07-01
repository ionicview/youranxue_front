import { Component, OnInit } from '@angular/core';
import { HomeworkDetailService } from '../../services/homeworkDetail/homeworkDetail.service';
import { HomeworkDetailViewVO } from '../../model/homeworkDetail/homeworkDetail.view.vo';

@Component({
  selector: 'app-homeworkDetail-list',
  templateUrl: './homeworkDetail-list.component.html',
  styleUrls: ['./homeworkDetail-list.component.scss']
})
export class HomeworkDetailListComponent implements OnInit {

  homeworkDetailList: Array<HomeworkDetailViewVO>;
  constructor(private homeworkDetailService: HomeworkDetailService) { }

  ngOnInit() {

    this.homeworkDetailService.getAllHomeworkDetailList().subscribe((homeworkDetails: Array<HomeworkDetailViewVO>) => {
      this.homeworkDetailList = homeworkDetails;
    });



  }

}

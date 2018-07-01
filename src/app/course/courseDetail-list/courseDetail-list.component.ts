import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from '../../services/courseDetail/courseDetail.service';
import { CourseDetailViewVO } from '../../model/courseDetail/courseDetail.view.vo';

@Component({
  selector: 'app-courseDetail-list',
  templateUrl: './courseDetail-list.component.html',
  styleUrls: ['./courseDetail-list.component.scss']
})
export class CourseDetailListComponent implements OnInit {

  courseDetailList: Array<CourseDetailViewVO>;
  constructor(private courseDetailService: CourseDetailService) { }

  ngOnInit() {

    this.courseDetailService.getAllCourseDetailList().subscribe((courseDetails: Array<CourseDetailViewVO>) => {
      this.courseDetailList = courseDetails;

    });
  }

}

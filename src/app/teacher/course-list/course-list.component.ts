import { CourseViewVo } from './../../model/course/course.view.vo';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: Array<CourseViewVo>;
  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.getAllCourseList().subscribe((courses: Array<CourseViewVo>) => {
      this.courseList = courses;

    });
  }

}

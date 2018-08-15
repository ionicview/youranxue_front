import { CourseViewVO } from '../../model/course/course.view.vo';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'mdb-app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: Array<CourseViewVO>;
  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.getAllCourseList().subscribe((courses: Array<CourseViewVO>) => {
      this.courseList = courses;

    });
  }

}

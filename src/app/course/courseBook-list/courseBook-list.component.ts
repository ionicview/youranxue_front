import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { CourseViewVO } from '../../model/course/course.view.vo';

@Component({
  selector: 'app-courseBook-list',
  templateUrl: './courseBook-list.component.html',
  styleUrls: ['./courseBook-list.component.scss']
})
export class CourseBookListComponent implements OnInit {

  courseBookList: Array<CourseViewVO>;
  constructor(private courseBookService: CourseService) { }

  ngOnInit() {

    this.courseBookService.getAllCourseList().subscribe((courseBooks: Array<CourseViewVO>) => {
      this.courseBookList = courseBooks;

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher/teacher.service';
import { TeacherViewVO } from '../../model/teacher/teacher.view.vo';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teacherList: Array<TeacherViewVO>;
  constructor(private teacherService: TeacherService) { }

  ngOnInit() {

    this.teacherService.getAllTeacherList().subscribe((teachers: Array<TeacherViewVO>) => {
      this.teacherList = teachers;

    });
  }

}

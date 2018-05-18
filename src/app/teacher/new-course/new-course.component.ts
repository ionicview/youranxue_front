import { InitNewCourse } from './../../model/course/init.new.course';
import { NewCourse } from './../../model/course/new.course';
import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  myForm: FormGroup;
  form: any;

  subjectSelect: Array<any>;
  gradeSelect: Array<any>;
  semesterSelect: Array<any>;
  publisherSelect: Array<any>;

  constructor(private fb: FormBuilder, private courseService: CourseService) {

    this.myForm = this.fb.group({
      'courseName': [null, Validators.minLength(3)],
      'subjectId': [null, Validators.required],
      'gradeId': [null, Validators.required],
      'semesterId': [null, Validators.required],
      'publisherId': [null, Validators.required],
      'studentCount': [null, Validators.required],
      'endDate': [null, Validators.required],
    });

  }

  ngOnInit() {
    // this.init();
    this.courseService.initNewCourse().subscribe((initSelectVal: InitNewCourse) => {
      this.subjectSelect = initSelectVal.subjectSelect;
      this.gradeSelect = initSelectVal.gradeSelect;
      this.semesterSelect = initSelectVal.semesterSelect;
      this.publisherSelect = initSelectVal.publisherSelect;
    }
    );



    // this.subjectSelect = this.initSelect.subjcetSelect;
    // this.subjectSelect = [
    //   { value: '1', label: '数学' },
    //   { value: '2', label: '语文' },
    //   { value: '3', label: '化学' },
    // ];
    // this.teachTargetSelect = [
    //   { value: '1', label: '小学' },
    //   { value: '2', label: '初中' },
    //   { value: '3', label: '高中' },
    // ];
    // this.colorSelect = [
    //   { value: '1', label: '数学' },
    //   { value: '2', label: '语文' },
    //   { value: '3', label: '化学' },
    // ];

  }


  //  init(): void {
  //   this.courseService.initNewCourseService().subscribe((initSelectVal: InitNewCourseService) => {
  //     this.initSelect = initSelectVal;

  //     console.log(this.initSelect);
  //   }
  //   );
  // }


  createNewCourse(newCourse: NewCourse): void {
    this.courseService.createNewCourse(newCourse).subscribe(() => {
      console.log("Return");
    });
  }

  reset() {

    this.myForm.reset();
  }



}

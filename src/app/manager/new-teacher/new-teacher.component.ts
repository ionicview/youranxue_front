import { InitNewTeacher } from './../../model/teacher/init.new.teacher';
import { NewTeacher } from './../../model/teacher/new.teacher';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher/teacher.service';


@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {

  myForm: FormGroup;
  form: any;

  subjectSelect: Array<any>;
  gradeSelect: Array<any>;
  semesterSelect: Array<any>;
  publisherSelect: Array<any>;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {

    this.myForm = this.fb.group({
      'teacherName': [null, Validators.minLength(3)],
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
    this.teacherService.initNewTeacher().subscribe((initSelectVal: InitNewTeacher) => {
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
  //   this.teacherService.initNewTeacherService().subscribe((initSelectVal: InitNewTeacherService) => {
  //     this.initSelect = initSelectVal;

  //     console.log(this.initSelect);
  //   }
  //   );
  // }


  createNewTeacher(newTeacher: NewTeacher): void {
    this.teacherService.createNewTeacher(newTeacher).subscribe(() => {
      console.log("Return");
    });
  }

  reset() {

    this.myForm.reset();
  }



}


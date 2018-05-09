import { InitNewTask } from './../../model/task/initNewTask';
import { NewTask } from './../../model/task/newtask';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  myForm: FormGroup;
  form: any;

  colorSelect: Array<any>;
  subjectSelect: Array<any>;
  teachTargetSelect: Array<any>;
  termSelect: Array<any>;

  initSelect: InitNewTask;

  constructor(private fb: FormBuilder, private taskService: TaskService) {

    this.myForm = this.fb.group({
      'className': [null, Validators.required],
      'subjectName': [null, Validators.required],
      'endTime': [null, Validators.required]
    });

  }

  ngOnInit() {
    // this.init();
    this.taskService.initNewTask().subscribe((initSelectVal: InitNewTask) => {
      this.subjectSelect = initSelectVal.subjectSelect;
      this.teachTargetSelect = initSelectVal.teachTargetSelect;
      this.termSelect = initSelectVal.termSelect;

    }
  );


    console.log(this.initSelect);
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
  //   this.taskService.initNewTask().subscribe((initSelectVal: InitNewTask) => {
  //     this.initSelect = initSelectVal;

  //     console.log(this.initSelect);
  //   }
  //   );
  // }


  doPost(newTask: NewTask): void {
    alert(newTask.className);

    this.taskService.doPost(newTask).subscribe(newTask => {

      console.log(newTask.className);
    });
  }



}

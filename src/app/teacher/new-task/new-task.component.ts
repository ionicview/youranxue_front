import { NewTask } from './../../model/newtask';
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

  constructor(private fb: FormBuilder, private taskService: TaskService) {

    this.myForm = this.fb.group({
      'className': [null, Validators.required],
      'subjectName': [null, Validators.required]
    });

  }

  ngOnInit() {
    this.colorSelect = [
      { value: '1', label: '数学' },
      { value: '2', label: '语文' },
      { value: '3', label: '化学' },
    ];
  }

  doPost(newTask: NewTask): void {
    alert(newTask.className);

    this.taskService.doPost(newTask).subscribe(newTask => {

      console.log(newTask.className);
    });
  }

}

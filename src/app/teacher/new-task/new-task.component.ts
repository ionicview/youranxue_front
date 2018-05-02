import { NewTask } from './../../model/newtask';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  myForm : FormGroup;
  form:any;
  constructor(private fb:FormBuilder,private taskService:TaskService) {

    this.myForm = this.fb.group({
      'className':[null,Validators.required],
      'subjectName':[null,Validators.required]
    });

   }

  ngOnInit() {
  }

  doPost(newTask:NewTask):void{
    alert(newTask.className);

    this.taskService.doPost(newTask).subscribe(newTask =>{

      console.log(newTask.className);
    });
  }

}

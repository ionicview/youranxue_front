import { QuestionNumberVO } from './../../model/question/question.number.vo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book/book.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-test-question-edit',
  templateUrl: 'test-question-edit.component.html',
  styleUrls: ['./test-question-edit.component.scss']
})
export class TestQuestionEditComponent implements OnInit {
  myForm: FormGroup;
  questionNumberList: Array<QuestionNumberVO>;

  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  constructor(private fb: FormBuilder, private service: BookService) {
    this.myForm = this.fb.group({

    });
  }

  ngOnInit() {
    this.items = this.service.getBooks();
  }
  onFilterChange(value: string) {
    console.log('filter:', value);
}
}

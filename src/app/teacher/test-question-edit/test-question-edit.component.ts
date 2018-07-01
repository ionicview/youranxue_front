import { TestService } from './../../services/test.service';
import { QuestionNumberVO } from './../../model/question/question.number.vo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book/book.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { Router } from '@angular/router';

@Component({
  selector: 'mdb-app-test-question-edit',
  templateUrl: 'test-question-edit.component.html',
  styleUrls: ['./test-question-edit.component.scss']
})
export class TestQuestionEditComponent implements OnInit {
  myForm: FormGroup;
  questionNumberList: QuestionNumberVO[];
  selectedQeustionNumberList: QuestionNumberVO[];

  bookContents: TreeviewItem[];
  selectedSectionIds: number[];
  selectedSectionNames: string[];
  sectionMap: Map<number, QuestionNumberVO>;

  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 800
  });

  constructor(private fb: FormBuilder, private router: Router, private testService: TestService, private bookService: BookService) {
    this.myForm = this.fb.group({

      'questionNumberList': [null, Validators.minLength(3)],
    });


  }

  ngOnInit() {
    this.bookContents = this.bookService.getContentsByBookId(11);

    this.sectionMap = new Map<number, QuestionNumberVO>();

    this.questionNumberList = [];
    this.bookContents.forEach(contents => {
      const chapterStr = contents.text;

      contents.children.forEach(children => {

        const sectionNameWithChapter = chapterStr.concat(' ： ').concat(children.text);
        // this.sectionMap.set(101, '1001');
        const sectionQuestion = new QuestionNumberVO(children.value, sectionNameWithChapter, 0);

        this.sectionMap.set(children.value, sectionQuestion);

        // this.questionNumberList.push(sectionQuestion);
        console.log(children.value + ':' + chapterStr.concat(children.text));
      });

    });


  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }

  onSelectedChange(event: number[]) {
    this.selectedSectionIds = event;
    console.debug(event);
    // 初期化选中章节
    this.questionNumberList = [];


    this.sectionMap.forEach((questionVo, sectionId) => {
      if (this.selectedSectionIds.indexOf(sectionId) !== -1) {
        this.questionNumberList.push(questionVo);
      } else {
        questionVo.questionCount = 0;
      }

    });

    // 从Map中选取选中的章节
    // this.selectedSectionIds.forEach((sectionId: number) => {
    //   console.log(sectionId);
    //   var questionNumberVO = this.sectionMap.get(sectionId);
    //   if (questionNumberVO) {
    //     this.questionNumberList.push(questionNumberVO);
    //   }
    // });

  }

  createNewTest() {

    this.testService.questionEditSubmit(1001, this.questionNumberList).subscribe(() => {
    });

    const testId = 1001;
    const testId2 = 2002;
    this.router.navigate(['/test-question-preview', testId, testId2]);

  }

}

import { TestService } from '../../services/test.service';
import { QuestionTestVO } from '../../model/question/question.test.vo';
import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import { ActivatedRoute } from '@angular/router';
import { QuestionChoiceVO } from '../../model/question/question.choice.vo';
import { QuestionFillBlankVO } from '../../model/question/question.fillblank.vo';
import { QuestionShortAnswerVO } from '../../model/question/question.short.answer.vo';
// import { MathJaxDirective } from '../../directive/mathjax.directive';

@Component({
  selector: 'mdb-app-test-question-preview',
  templateUrl: './test-question-preview.component.html',
  styleUrls: ['./test-question-preview.component.scss'],
})
export class TestQuestionPreviewComponent implements OnInit {
  equationTexString: string;
  testImg: string;
  title = 'ng-katex';
  url = 'https://github.com/garciparedes/ng-katex';
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';


  questionTest: QuestionTestVO;

  choiceList: Array<QuestionChoiceVO>;
  fillblankList: Array<QuestionFillBlankVO>;
  shortAnswerList: Array<QuestionShortAnswerVO>;


  options: KatexOptions = {
    displayMode: false,
  };

  testid: number;

  constructor(private route: ActivatedRoute, private testService: TestService) {
  }

  ngOnInit() {

    // 此处必须初始化，否则会空指针
    this.fillblankList = [];
    this.route.params.subscribe(params => {
      this.testid = +params['testId']; // (+) converts string 'id' to a number
      this.testService.getAllTestQuestionsByTestId(this.testid).subscribe((questions: QuestionTestVO) => {

        // 选择题
        this.choiceList = questions.choiceList;

        questions.fillblankList.forEach((fillBlank: QuestionFillBlankVO) => {
          // 将从服务器端接收到的数据，变换为画面端Object
          // QuestionFillBlankVO的构造函数会将接收到题目转换为画面可显示结构

          const fillBlankVO = new QuestionFillBlankVO(fillBlank.fillblankId, fillBlank.question, fillBlank.blankList, fillBlank.imgList);
          this.fillblankList.push(fillBlankVO);
        });

        // 问答题
        this.shortAnswerList = questions.shortAnswerList;

        this.questionTest = questions;

      });


    });


    // tslint:disable-next-line:max-line-length
    // this.equationTexString = '如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(　)';
    this.equationTexString = '如图 下列 $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$ 是否';

    this.testImg = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Barrulet_demo.svg';
  }


}

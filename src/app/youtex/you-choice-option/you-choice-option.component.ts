import { Component, OnInit, Input } from '@angular/core';
import { QuestionChoiceOptionVO } from '../../model/question/question.choice.option.vo';

@Component({
  selector: 'mdb-you-choice-option',
  templateUrl: './you-choice-option.component.html',
  styleUrls: ['./you-choice-option.component.scss']
})
export class YouChoiceOptionComponent implements OnInit {

  @Input() choiceOption: QuestionChoiceOptionVO;
  imgList: Array<string>;
  constructor() { }

  ngOnInit() {
    //this.imgList = [{ 'http://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153'}];

   // this.imgList = ['image/imageDisplay/imgouter/No-image-available.jpg'];
    //this.imgList = ['image/imageDisplay/imgouter/3.svg'];
    //this.imgList = ['https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg'];
    //this.imgList = ['http://ka2.org/wp-content/themes/ms/assets/img/ms_logomark.svg'];
    

    //this.choiceOption.imgList = this.imgList;



  }

}

import { QuestionFillBlankBlankVO } from './question.fillblank.blank.vo';

export class QuestionFillBlankVO {

    private BLANK_MARK_STR = '#BLANK#';

    fillblankId: number;
    question: string;
    blankCount: number;
    questionSections: Array<string>;
    imgList: Array<string>;
    blankList: Array<QuestionFillBlankBlankVO>;

    constructor(fillblankId: number, question: string, blankList: Array<QuestionFillBlankBlankVO>, imgList: Array<string>) {

        this.fillblankId = fillblankId;
        this.question = question;
        this.blankList = blankList;
        this.imgList = imgList;

        console.log('fillblank from server:' + blankList[0].yourAnswer);
        console.log('In Question FillBlank VO:' + this.question);
        this.questionSections = this.question.split(this.BLANK_MARK_STR);

        console.log('Section0:' + this.questionSections[0]);
        console.log('Section1:' + this.questionSections[1]);
        console.log('Section2:' + this.questionSections[2]);
        this.blankCount = this.questionSections.length - 1;

        console.log('count:' + this.blankCount);
    }

}

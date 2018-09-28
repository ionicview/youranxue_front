import { QuestionAnswerVO } from './question.answer.vo';

export class QuestionShortAnswerSubQuestionVO{
	// 小题目ID
	subQuestionId:number;

	// 小题干
	subQuestion:string;

	// 小题图片
	subQuestionImgListStr:string;

	// 小题回答
	subQuestionanswer:QuestionAnswerVO;

	constructor() {
        this.subQuestionanswer = new QuestionAnswerVO();
    }
}

import { QuestionChoiceOptionVO } from './question.choice.option.vo';
import { BaseQuestionVO } from './base.question.vo';


export class QuestionChoiceVO extends BaseQuestionVO {
    choiceOptionList: Array<QuestionChoiceOptionVO>;
    constructor(optionCount: number) {
        super();
        this.choiceOptionList = [];
        for (let i = 0; i < optionCount; i++) {
            this.choiceOptionList.push(new QuestionChoiceOptionVO(65 + i));

        }
    }
}

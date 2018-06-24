export class QuestionNumberVO {
    sectionId: number;
    sectionName: string | undefined;
    questionCount: number;
    constructor(sectionId: number, sectionName: string | undefined, questionCount: number) {
        this.sectionId = sectionId;
        this.sectionName = sectionName;
        this.questionCount = questionCount;

    }

}
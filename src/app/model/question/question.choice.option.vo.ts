export class QuestionChoiceOptionVO {
  choiceId: number;
  sequenceNo: number;
  choiceItem: string;
  imgList: Array<string>;
  imgListStr: string;
  rightAnswerFlg: boolean;
  isSelected: boolean;
  status: string;
  constructor(sequenceNo: number) {
    this.sequenceNo = sequenceNo;
    this.choiceItem = ''.concat((sequenceNo - 64).toString()).concat('个');
    const n = '' + this.sequenceNo;

    this.imgListStr = 'option_img_'.concat(n).concat(';');
  }

  public convertToImgList(): void {
    this.imgList = this.imgListStr.split(';');

  }
}

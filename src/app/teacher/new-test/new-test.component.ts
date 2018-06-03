import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { NewTest } from '../../model/test/new.test';


@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {
  myForm: FormGroup;
  chapterSelect: Array<any>;
  sectionSelect: Array<any>;
  constructor(private fb: FormBuilder, private testServcie: TestService) {
    this.myForm = this.fb.group({
      'testName': [null, Validators.minLength(3)],
      'chapterId': [null, Validators.required],
      'sectionId': [null, Validators.required],
      'useHour': [null, Validators.required],
      'useMin': [null, Validators.required],
      'totalScore': [null, Validators.required],
    });
  }

  ngOnInit() {

    this.testServcie.initNewTest().subscribe(chapterSelectOption => {
      this.chapterSelect = chapterSelectOption;
    });

    // this.chapterSelect = [
    //   { value: '0', label: '所有章节' },
    //   { value: '1', label: '第一章' },
    //   { value: '2', label: '第二章' },
    //   { value: '3', label: '第三章' },
    // ];

    // this.sectionSelect = [
    //   { value: '1', label: '数学' },
    //   { value: '2', label: '语文' },
    //   { value: '3', label: '化学' },
    // ];

    // this.sectionSelect1 = [
    //   { value: '1', label: '数学1' },
    //   { value: '2', label: '语文1' },
    //   { value: '3', label: '化学1' },
    // ];

    // this.sectionSelect2 = [
    //   { value: '1', label: '数学2' },
    //   { value: '2', label: '语文2' },
    //   { value: '3', label: '化学2' },
    // ];

    //this.chapterSectionMap = new Map<string, Array<any>();


  }

  onChpaterChange(chapterId: number) {

    this.testServcie.getSectionSelect(chapterId).subscribe(sectionSelectOption => {
      this.sectionSelect = sectionSelectOption;
    });

    console.log(chapterId);
  }

  createNewTest(newTest: NewTest): void {
    this.testServcie.createNewTest(newTest).subscribe(() => {
      console.log("Return");
    });
  }


}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillblankQuestionComponent } from './fillblank-question.component';

describe('FillblankQuestionComponent', () => {
  let component: FillblankQuestionComponent;
  let fixture: ComponentFixture<FillblankQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillblankQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillblankQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

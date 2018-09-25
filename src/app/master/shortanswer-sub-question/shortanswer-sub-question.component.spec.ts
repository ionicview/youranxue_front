import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortanswerSubQuestionComponent } from './shortanswer-sub-question.component';

describe('ShortanswerSubQuestionComponent', () => {
  let component: ShortanswerSubQuestionComponent;
  let fixture: ComponentFixture<ShortanswerSubQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortanswerSubQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortanswerSubQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

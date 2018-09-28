import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortanswerQuestionComponent } from './shortanswer-question.component';

describe('ShortanswerQuestionComponent', () => {
  let component: ShortanswerQuestionComponent;
  let fixture: ComponentFixture<ShortanswerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortanswerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortanswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

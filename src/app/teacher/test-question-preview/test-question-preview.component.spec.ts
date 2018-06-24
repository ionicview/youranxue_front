import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionPreviewComponent } from './test-question-preview.component';

describe('TestQuestionPreviewComponent', () => {
  let component: TestQuestionPreviewComponent;
  let fixture: ComponentFixture<TestQuestionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQuestionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQuestionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

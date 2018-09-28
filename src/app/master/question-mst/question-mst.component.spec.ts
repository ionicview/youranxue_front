import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMstComponent } from './question-mst.component';

describe('QuestionMstComponent', () => {
  let component: QuestionMstComponent;
  let fixture: ComponentFixture<QuestionMstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

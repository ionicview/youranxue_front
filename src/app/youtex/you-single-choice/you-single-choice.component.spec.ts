import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouSingleChoiceComponent } from './you-single-choice.component';

describe('YouSingleChoiceComponent', () => {
  let component: YouSingleChoiceComponent;
  let fixture: ComponentFixture<YouSingleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouSingleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouSingleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

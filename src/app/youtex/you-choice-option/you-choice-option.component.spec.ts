import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouChoiceOptionComponent } from './you-choice-option.component';

describe('YouChoiceOptionComponent', () => {
  let component: YouChoiceOptionComponent;
  let fixture: ComponentFixture<YouChoiceOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouChoiceOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouChoiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

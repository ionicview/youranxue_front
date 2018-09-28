import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouChoiceComponent } from './you-choice.component';

describe('YouChoiceComponent', () => {
  let component: YouChoiceComponent;
  let fixture: ComponentFixture<YouChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

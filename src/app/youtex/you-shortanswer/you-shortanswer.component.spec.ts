import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouShortanswerComponent } from './you-shortanswer.component';

describe('YouShortanswerComponent', () => {
  let component: YouShortanswerComponent;
  let fixture: ComponentFixture<YouShortanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouShortanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouShortanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

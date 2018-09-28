import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouKatexComponent } from './you-katex.component';

describe('YouKatexComponent', () => {
  let component: YouKatexComponent;
  let fixture: ComponentFixture<YouKatexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouKatexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouKatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

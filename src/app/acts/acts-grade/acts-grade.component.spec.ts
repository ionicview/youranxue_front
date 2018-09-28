import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsGradeComponent } from './acts-grade.component';

describe('ActsGradeComponent', () => {
  let component: ActsGradeComponent;
  let fixture: ComponentFixture<ActsGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActsGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

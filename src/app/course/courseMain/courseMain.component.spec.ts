import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMainComponent } from './courseMain.component';

describe('CourseMainComponent', () => {
  let component: CourseMainComponent;
  let fixture: ComponentFixture<CourseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

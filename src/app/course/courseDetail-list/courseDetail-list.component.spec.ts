import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailListComponent } from './courseDetail-list.component';

describe('CourseDetailListComponent', () => {
  let component: CourseDetailListComponent;
  let fixture: ComponentFixture<CourseDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

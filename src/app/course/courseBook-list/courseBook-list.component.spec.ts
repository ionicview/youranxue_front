import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBookListComponent } from './courseBook-list.component';

describe('CourseBookListComponent', () => {
  let component: CourseBookListComponent;
  let fixture: ComponentFixture<CourseBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

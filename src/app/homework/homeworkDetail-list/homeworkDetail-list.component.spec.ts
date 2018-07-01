import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDetailListComponent } from './homeworkDetail-list.component';

describe('HomeworkDetailListComponent', () => {
  let component: HomeworkDetailListComponent;
  let fixture: ComponentFixture<HomeworkDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

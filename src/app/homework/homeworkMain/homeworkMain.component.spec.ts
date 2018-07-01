import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkMainComponent } from './homeworkMain.component';

describe('HomeworkMainComponent', () => {
  let component: HomeworkMainComponent;
  let fixture: ComponentFixture<HomeworkMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

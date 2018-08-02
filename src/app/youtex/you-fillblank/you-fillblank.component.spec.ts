import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouFillblankComponent } from './you-fillblank.component';

describe('YouFillblankComponent', () => {
  let component: YouFillblankComponent;
  let fixture: ComponentFixture<YouFillblankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouFillblankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouFillblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

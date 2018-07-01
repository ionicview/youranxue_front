import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsChartsComponent } from './acts-charts.component';

describe('ActsChartsComponent', () => {
  let component: ActsChartsComponent;
  let fixture: ComponentFixture<ActsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

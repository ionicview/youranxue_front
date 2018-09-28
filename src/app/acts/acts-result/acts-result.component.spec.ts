import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsResultComponent } from './acts-result.component';

describe('ActsResultComponent', () => {
  let component: ActsResultComponent;
  let fixture: ComponentFixture<ActsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

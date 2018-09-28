import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsHeaderComponent } from './acts-header.component';

describe('ActsHeaderComponent', () => {
  let component: ActsHeaderComponent;
  let fixture: ComponentFixture<ActsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

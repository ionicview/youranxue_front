import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouImgComponent } from './you-img.component';

describe('YouImgComponent', () => {
  let component: YouImgComponent;
  let fixture: ComponentFixture<YouImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

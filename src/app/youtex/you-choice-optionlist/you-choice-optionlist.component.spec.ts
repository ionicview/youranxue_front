import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouChoiceOptionlistComponent } from './you-choice-optionlist.component';

describe('YouChoiceOptionlistComponent', () => {
  let component: YouChoiceOptionlistComponent;
  let fixture: ComponentFixture<YouChoiceOptionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouChoiceOptionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouChoiceOptionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

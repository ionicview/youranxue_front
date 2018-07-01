import { TestBed, inject } from '@angular/core/testing';

import { CourseDetailService } from './courseDetail.service';

describe('CourseDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailService]
    });
  });

  it('should be created', inject([CourseDetailService], (service: CourseDetailService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { HomeworkDetailService } from './homeworkDetail.service';

describe('HomeworkDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeworkDetailService]
    });
  });

  it('should be created', inject([HomeworkDetailService], (service: HomeworkDetailService) => {
    expect(service).toBeTruthy();
  }));
});

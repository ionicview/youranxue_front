import { TestBed, inject } from '@angular/core/testing';

import { ActsResultService } from './acts-result.service';

describe('ActsResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActsResultService]
    });
  });

  it('should be created', inject([ActsResultService], (service: ActsResultService) => {
    expect(service).toBeTruthy();
  }));
});

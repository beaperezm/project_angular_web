import { TestBed } from '@angular/core/testing';

import { ApiHistoricalPeriodService } from './api-historical-periods.service';

describe('ApiHistoricalPeriodService', () => {
  let service: ApiHistoricalPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHistoricalPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

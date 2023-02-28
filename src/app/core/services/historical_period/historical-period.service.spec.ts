import { TestBed } from '@angular/core/testing';

import { HistoricalPeriodService } from './historical-period.service';

describe('HistoricalPeriodService', () => {
  let service: HistoricalPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DinosService } from './dinos.service';

describe('DinosService', () => {
  let service: DinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

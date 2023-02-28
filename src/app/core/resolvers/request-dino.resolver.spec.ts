import { TestBed } from '@angular/core/testing';

import { RequestDinoResolver } from './request-dino.resolver';

describe('RequestDinoResolver', () => {
  let resolver: RequestDinoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RequestDinoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

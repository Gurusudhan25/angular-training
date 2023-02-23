import { TestBed } from '@angular/core/testing';

import { CanmatchGuard } from './canmatch.guard';

describe('CanmatchGuard', () => {
  let guard: CanmatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanmatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

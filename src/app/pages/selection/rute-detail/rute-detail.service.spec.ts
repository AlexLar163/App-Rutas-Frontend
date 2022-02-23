import { TestBed } from '@angular/core/testing';

import { RuteDetailService } from './rute-detail.service';

describe('RuteDetailService', () => {
  let service: RuteDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuteDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

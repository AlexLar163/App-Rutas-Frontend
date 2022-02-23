import { TestBed } from '@angular/core/testing';

import { RutesService } from './rutes.service';

describe('RutesService', () => {
  let service: RutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

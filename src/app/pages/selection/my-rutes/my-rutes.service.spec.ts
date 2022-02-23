import { TestBed } from '@angular/core/testing';

import { MyRutesService } from './my-rutes.service';

describe('MyRutesService', () => {
  let service: MyRutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

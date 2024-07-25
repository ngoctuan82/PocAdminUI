import { TestBed } from '@angular/core/testing';

import { InvalidDataService } from './invalid-data.service';

describe('InvalidDataService', () => {
  let service: InvalidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvalidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

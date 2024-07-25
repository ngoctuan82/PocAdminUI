import { TestBed } from '@angular/core/testing';

import { FileEventService } from './file-event.service';

describe('FileEventService', () => {
  let service: FileEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

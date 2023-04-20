import { TestBed } from '@angular/core/testing';

import { SupporthoursService } from './supporthours.service';

describe('SupporthourrowService', () => {
  let service: SupporthoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupporthoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

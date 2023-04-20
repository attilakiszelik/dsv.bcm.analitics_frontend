import { TestBed } from '@angular/core/testing';

import { UsagesService } from './usages.service';

describe('UsagesService', () => {
  let service: UsagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

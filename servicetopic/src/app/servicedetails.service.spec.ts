import { TestBed } from '@angular/core/testing';

import { ServicedetailsService } from './servicedetails.service';

describe('ServicedetailsService', () => {
  let service: ServicedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

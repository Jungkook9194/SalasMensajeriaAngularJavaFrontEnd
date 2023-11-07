import { TestBed } from '@angular/core/testing';

import { SelectedserviceService } from './selectedservice.service';

describe('SelectedserviceService', () => {
  let service: SelectedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

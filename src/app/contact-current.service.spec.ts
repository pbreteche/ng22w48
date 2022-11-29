import { TestBed } from '@angular/core/testing';

import { ContactCurrentService } from './contact-current.service';

describe('ContactCurrentService', () => {
  let service: ContactCurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactCurrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

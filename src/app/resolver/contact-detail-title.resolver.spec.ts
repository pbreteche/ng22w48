import { TestBed } from '@angular/core/testing';

import { ContactDetailTitleResolver } from './contact-detail-title.resolver';

describe('ContactDetailTitleResolver', () => {
  let resolver: ContactDetailTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContactDetailTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

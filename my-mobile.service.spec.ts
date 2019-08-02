import { TestBed } from '@angular/core/testing';

import { MyMobileService } from './my-mobile.service';

describe('MyMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMobileService = TestBed.get(MyMobileService);
    expect(service).toBeTruthy();
  });
});

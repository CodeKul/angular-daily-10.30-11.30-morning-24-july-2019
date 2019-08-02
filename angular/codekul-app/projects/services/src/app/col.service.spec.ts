import { TestBed } from '@angular/core/testing';

import { ColService } from './col.service';

describe('ColService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColService = TestBed.get(ColService);
    expect(service).toBeTruthy();
  });
});

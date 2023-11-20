import { TestBed } from '@angular/core/testing';

import { AutmovieService } from './autmovie.service';

describe('AutmovieService', () => {
  let service: AutmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

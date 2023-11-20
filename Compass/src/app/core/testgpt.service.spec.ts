import { TestBed } from '@angular/core/testing';

import { TestgptService } from './testgpt.service';

describe('TestgptService', () => {
  let service: TestgptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestgptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

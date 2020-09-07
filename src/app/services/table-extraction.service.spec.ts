import { TestBed } from '@angular/core/testing';

import { TableExtractionService } from './table-extraction.service';

describe('TableExtractionService', () => {
  let service: TableExtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableExtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdiServiceConnectorService } from './adi-service-connector.service';

describe('AdiServiceConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdiServiceConnectorService = TestBed.get(AdiServiceConnectorService);
    expect(service).toBeTruthy();
  });
});

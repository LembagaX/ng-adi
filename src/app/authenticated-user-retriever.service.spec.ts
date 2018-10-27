import { TestBed } from '@angular/core/testing';

import { AuthenticatedUserRetrieverService } from './authenticated-user-retriever.service';

describe('AuthenticatedUserRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatedUserRetrieverService = TestBed.get(AuthenticatedUserRetrieverService);
    expect(service).toBeTruthy();
  });
});

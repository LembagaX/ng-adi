import { TestBed } from '@angular/core/testing';

import { GravatarParserService } from './gravatar-parser.service';

describe('GravatarParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GravatarParserService = TestBed.get(GravatarParserService);
    expect(service).toBeTruthy();
  });
});

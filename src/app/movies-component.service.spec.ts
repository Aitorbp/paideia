import { TestBed } from '@angular/core/testing';

import { MoviesComponentService } from './services/movies-component.service';

describe('MoviesComponentService', () => {
  let service: MoviesComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

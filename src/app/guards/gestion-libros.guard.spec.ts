import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestionLibrosGuard } from './gestion-libros.guard';

describe('gestionLibrosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gestionLibrosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

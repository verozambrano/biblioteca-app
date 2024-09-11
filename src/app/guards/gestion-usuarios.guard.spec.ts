import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestionUsuariosGuard } from './gestion-usuarios.guard';

describe('gestionUsuariosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gestionUsuariosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

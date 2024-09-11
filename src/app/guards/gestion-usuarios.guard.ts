import { CanActivateFn } from '@angular/router';

export const gestionUsuariosGuard: CanActivateFn = (route, state) => {
  return false;
};

import { CanActivateFn } from '@angular/router';

export const gestionLibrosGuard: CanActivateFn = (route, state) => {
  return false;
};

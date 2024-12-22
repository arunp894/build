import { CanActivateFn, Router } from '@angular/router';
import { select } from '@ngxs/store';
import { AuthState } from '../shared/store/state/auth.state';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = select(AuthState.isAuthenticated)
  const router = inject(Router);  
  if(isAuthenticated()) return true
  else{
    return router.navigate(['auth'])
  }  
};

export const authNotGuard : CanActivateFn = (route, state) => {
  const isAuthenticated = select(AuthState.isAuthenticated)
   return !isAuthenticated()
}
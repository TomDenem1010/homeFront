import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if(!this.isLoggedIn()) {
      this.router.navigate(['login']);
    }
    return true;
  }

  isLoggedIn(): boolean {
    return this.isLocalStorageData() && this.isTimeCorrect();
  }

  isLocalStorageData(): boolean {
    if(!localStorage.getItem("id")) {
        return false;
    }
    if(!localStorage.getItem("secret")) {
        return false;
    }
    if(!localStorage.getItem("time")) {
        return false;
    }   

    return true;
  }

  isTimeCorrect(): boolean {
    if(false) {
        return false;
    }   

    return true;
  }
}

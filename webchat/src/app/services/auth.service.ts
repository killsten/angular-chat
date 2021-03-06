import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';

import { Alert } from './../classes/alert';
import { AlertService } from './alert.service';
import { AlertType } from './../enums/alert-type.enum';

import { Observable, of } from 'rxjs';


@Injectable()
export class AuthService {

  public currentUser: Observable<User> | null;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {
    this.currentUser = of(null);
  }
  
  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return of(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    return of(true);
  }

  public logout(): void {
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('You have been signed out'));
  }

}

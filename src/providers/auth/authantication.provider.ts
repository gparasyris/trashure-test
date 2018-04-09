import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class IPages {
  title: string;
  component: any;
  icon: string;
  guard: boolean;
}
@Injectable()
export class AuthenticationProvider {


  check: any;
  pages: IPages[] = [];
  pagesObservable: Subject<IPages[]>;

  constructor() {
    this.check = {};
    this.pagesObservable = <Subject<IPages[]>>new Subject();
  }

  register(newUser) {
    return new Promise((resolve, reject) => {
      try {
        let users = JSON.parse(localStorage.getItem('users'));
        if (!users) users = [];
        let user = users.find(u => u.username === newUser.username);
        if (!user) {
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          resolve(true);
        }
        else {
          reject('ERRORS.REGISTER.USERNAME_EXISTS');
        }

      } catch (error) {
        reject(error);
      }
    });
  }

  logout() {
    localStorage.removeItem('logged');
  }

  login(user) {
    return new Promise((resolve, reject) => {
      let users = JSON.parse(localStorage.getItem('users'));
      let authenticatedUser = users.find(u => u.username === user.username);
      if (authenticatedUser) {
        if(authenticatedUser.password === user.password){
          localStorage.setItem('logged', JSON.stringify(authenticatedUser));
          resolve(authenticatedUser);
        }
        else{
          reject('ERRORS.LOGIN_CREDENTIALS');
        }
      }
      reject('ERRORS.LOGIN_CREDENTIALS');

    })
  }

  checkCredentials() {
    let isLoggedIn = localStorage.getItem('logged');
    if (!isLoggedIn) {
      return null;
    }
    return JSON.parse(isLoggedIn);
  }

}

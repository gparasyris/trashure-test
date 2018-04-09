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
        if(!users) users = [];
        let user = users.find(u => u.username === newUser.username);
        if(!user){
          users.push({ username: newUser.username, password: newUser.password });
          localStorage.setItem('users', JSON.stringify(users));
          resolve(true);
        }
        else{
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

  login(name) {
    let users = JSON.parse(localStorage.getItem('users'));
    let authenticatedUser = users.find(u => u.name === name);
    if (authenticatedUser) {
      localStorage.setItem('logged', JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
  }

  checkCredentials() {
    let isLoggedIn = localStorage.getItem('logged');
    if (!isLoggedIn) {
      return null;
    }
    return JSON.parse(isLoggedIn);
  }

}

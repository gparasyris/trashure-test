import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class IPages {
  title: string;
  component: any;
  icon: string;
  guard: boolean;
}
@Injectable()
export class UserProvider {

  public quizes: any;
  public user: any = {};

  constructor() {
    this.quizes = {};
  }

  setUser(user) {
    this.user = user;
    if (!this.user['quizes'])
      this.user['quizes'] = {};
  }

  setScore(title, score) {
    this.user['quizes'][title] = score;
    this.updateUserDB();
  }

  updateUserDB() {
    localStorage.setItem('logged', JSON.stringify(this.user));
    this.updateAllUsers();
  }

  updateAllUsers() {
    let users: any[] = JSON.parse(localStorage.getItem('users'));
    if (!users) users = [];
    const position = users.findIndex(u => u.username === this.user.username);
    users[position] = this.user;
    localStorage.setItem('users', JSON.stringify(users));
  }
}

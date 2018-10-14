import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {storeCleanupFn} from '@angular/core/src/render3/instructions';

@Injectable()
export class UserService {
  register(user: User) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('pw', user.password)
    return user;
  }
  login(username: string, password: string) {
    if (username === localStorage.getItem('username') && password === localStorage.getItem('pw')) {
      return username;
    }
  }
}

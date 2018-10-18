import {Injectable} from '@angular/core';
import {User} from '../_models/user';


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
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('pw');
  }
}

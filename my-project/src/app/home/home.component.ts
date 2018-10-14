import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
  constructor(
    private userService: UserService,
  ) {}
  onSubmit() {
    this.userService.logout();
  }
}

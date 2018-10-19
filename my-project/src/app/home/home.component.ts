import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';




@Component({templateUrl: 'home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}
  onSubmit() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  onProfile() {
    this.router.navigate(['/profile']);
  }
}

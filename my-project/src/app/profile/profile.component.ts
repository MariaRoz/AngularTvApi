import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(localStorage.getItem('firstname')),
    lastName: new FormControl(localStorage.getItem('lastname')),
    password: new FormControl(localStorage.getItem('pw'))
  });
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  //   ngOnInit() {
  //     this.userService.getUser(this.users);
  //   }
  onSubmit() {
    this.userService.register(this.profileForm.value);
  }
  onHome() {
    this.router.navigate(['/']);
  }
}

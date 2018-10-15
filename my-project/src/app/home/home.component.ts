import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {TableService} from '../_services/table.service';
import {Router} from '@angular/router';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  arr = [];
  constructor(
    private userService: UserService,
    private tableService: TableService,
    private router: Router,
  ) {}
ngOnInit() {
  this.tableService.getData()
      .subscribe(data => {
        for (let i = 0; i < 10; i++) {this.arr[i] = data[i].show; } // error!! length does not exist on type Object
  console.log(this.arr)
  return this.arr; });
      }
  onSubmit() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}

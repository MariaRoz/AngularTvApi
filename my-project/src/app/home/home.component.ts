import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {TableService} from '../_services/table.service';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit{
  arr = [];
  constructor(
    private userService: UserService,
    private tableService: TableService
  ) {}
ngOnInit() {
  this.tableService.getData()
      .subscribe(data => {
  for (let i = 0; i < data.length; i++) {this.arr[i] = data[i].show; }
  console.log(this.arr)
  return this.arr; });
      }
  onSubmit() {
    this.userService.logout();
  }
}

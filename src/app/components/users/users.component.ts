import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  //selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowNewUser :boolean = false;
 
  constructor() {
    console.log('ctor of users component');
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }
  ngOnInit(): void {
    console.log('ngonint of users component');
  }
}

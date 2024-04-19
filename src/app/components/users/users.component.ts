import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  //selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  allowNewUser :boolean = false;
  userCreatedStatus : string = 'No User is created';
  userName:string = '';


  constructor() {
    console.log('ctor of users component');
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  ngOnInit(): void {
    console.log('ngonint of users component');
  }

  changeUserCreatedStatus = ()=>{
    this.userCreatedStatus = 'User is created';
  }

  onUpdateUser = (event:Event)=> {
    console.log(event);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css' ,'../../../app/app.component.css']
})
export class UserComponent {
  userID:number = 10;
  userStatus:string = 'Active';

  getUserStatus =  () => {
    return this.userStatus;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  userList: any [] = [];
  loogedUserData: any;
  constructor(private http: HttpClient) {
    const localData = localStorage.getItem("loogedUserData");
    if(localData != null) {
      this.loogedUserData = JSON.parse(localData);
      if(this.loogedUserData.role == "Admin") {
        //this.getAllusers();
      }
      else {
        //this.getAllUserByClient();
      }
    }
  }
}

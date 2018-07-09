import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {

  private user:User[]
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })
  }

}

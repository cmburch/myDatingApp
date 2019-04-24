import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from './../_services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
   loadUser() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.user = users;
    }, error => {
      console.log(error);
    });
   }
}

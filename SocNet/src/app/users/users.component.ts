import { Component, OnInit } from '@angular/core';
import { User } from '../user.ts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: []

  constructor() { }

  ngOnInit() {
  }

}

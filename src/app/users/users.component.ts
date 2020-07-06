import { Component, OnInit, Injectable } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => (this.users = users));
  }

  addUser(firstName: string, lastName: string, email: string): void {
    const newUser: User = { firstName, lastName, email} as User;
    this.usersService.addUser(newUser).subscribe(user => this.users.push(user));
  }


}

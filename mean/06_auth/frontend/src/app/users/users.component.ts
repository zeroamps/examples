import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[];
  constructor(private route: ActivatedRoute) {
    this.users = this.route.snapshot.data['users'];
  }
}

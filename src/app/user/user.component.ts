import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Just like JS arrays
  pickedUser = DUMMY_USERS[randIndex];

  // Like a property and not to be called explicitly
  get imagePath(){
    // This keyword as inside the class so.
    return 'assets/images/users/' + this.pickedUser.avatar;
  }

  onSelectUser(){
    const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.pickedUser = DUMMY_USERS[randIndex];
  }
}

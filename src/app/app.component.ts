import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';

  users = DUMMY_USERS;

  selectedUserId?: string;
  onSelectUser(id: string){
    console.log("This is an id : ", id);
    this.selectedUserId = id;
  }

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}

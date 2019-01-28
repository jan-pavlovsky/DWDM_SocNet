import { Component } from '@angular/core';
import { Post } from './model/post';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsService } from './services/posts.service';
import { User } from './model/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'My Test SocNet';
  creatingPost: boolean;

  currentUser: User;
  testUserId: string = "666";

  constructor(private router: Router, private postsService: PostsService, private usersService: UsersService) {
    this.creatingPost = false;

    usersService.getUserById(this.testUserId).toPromise().then((result) => {
      this.currentUser = new User({
        alias: result.get('alias'),
        firstName: result.get('firstName'),
        lastName: result.get('lastName'),
        id: this.testUserId});
    }).catch(() => {
      console.log('nic');
      this.currentUser = new User({ alias: "TestUser", id: "666", firstName: "test", lastName: "user" });
      usersService.createUserManualId(this.currentUser);
    });
  }

  newPost() {
    this.router.navigate([{ outlets: { modal: ['newPost', this.currentUser.id] } }]);
  }

  ngOnInit() {
  }
}

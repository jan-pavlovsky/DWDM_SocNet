import { Component } from '@angular/core';
import { Post } from './post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Test SocNet';

  creatingPost: boolean;

  constructor(private router: Router) {
    this.creatingPost = false;
  }

  newPost() {
    this.creatingPost = true;
  }
  publishPost(post:Post) {
    console.log('a');
    this.creatingPost = false;
  }
}

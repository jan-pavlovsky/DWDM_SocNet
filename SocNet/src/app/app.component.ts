import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Test SocNet';

  creatingPost: boolean;

  constructor() {
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

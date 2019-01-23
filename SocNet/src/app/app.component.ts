import { Component } from '@angular/core';
import { Post } from './post';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Test SocNet';

  creatingPost: boolean;

  posts: Array<any>;

  constructor(private router: Router, private postsService: PostsService) {
    this.creatingPost = false;
    console.log(environment.testVal);
  }

  newPost() {
    this.creatingPost = true;
  }
  publishPost(post: Post) {
    console.log('posting');
    this.postsService.createPost("user", "content");
    console.log('posted');
    this.creatingPost = false;
  }

  ngOnInit() {
    console.log('init')
    this.postsService.getAllPosts().subscribe(result => {
      this.posts = result;
    });
  }
}

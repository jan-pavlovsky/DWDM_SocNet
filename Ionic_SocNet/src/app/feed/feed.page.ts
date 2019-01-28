import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';

import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts: Array<Post>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log('init')
    this.postsService.getAllPosts().subscribe(result => {
      this.posts = result;
    });
  }

}

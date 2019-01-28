import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Array<Post>;

  sortedPosts() {
    if (typeof this.posts === 'undefined') return []
    else
    return this.posts.sort(
        (post1: Post, post2: Post): number => {return post2.created - post1.created}
    );
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log('init')
    this.postsService.getAllPosts().subscribe(result => {
      this.posts = result.map(post => new Post(post));
    });
  }

}

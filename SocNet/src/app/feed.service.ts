import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  posts: Post[]; 

  constructor() { }

  addPost(post:Post) {
    this.posts.push(post);
  }
}

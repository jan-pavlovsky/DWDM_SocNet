import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Observable<Array<any>>;

  constructor(public db: AngularFirestore) {
    this.posts = db.collection('/posts').valueChanges();
  }

  public getAllPosts() {
    return this.db.collection('/posts').snapshotChanges();
  }

  public createPost(user: string, content: string) {
  }

  public getPostById(id: string) {
  }

  public updatePost(post: Post) {
  }

  public deletePostById(id: string) {
  }
}

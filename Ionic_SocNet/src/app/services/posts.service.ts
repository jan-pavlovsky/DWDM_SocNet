import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Observable<Array<any>>;

  constructor(private db: AngularFirestore) {
    this.posts = db.collection('/posts').snapshotChanges();
  }

  public getAllPosts() {
    return this.db.collection('/posts').valueChanges();
  }

  public createPost(post: Post) {
    this.db.collection("/posts").add({
      name: post.user.alias,
      created: post.created,
      content: post.content
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }

  public getPostById(id: string) {
    return this.db.collection('posts').doc(id).get();
  }

  public updatePost(post: Post) {
    let id = post.id;
    return this.db.collection('posts').doc(id).set(post);
  }

  public deletePostById(id: string) {
    return this.db.collection('posts').doc(id).delete();
  }
}

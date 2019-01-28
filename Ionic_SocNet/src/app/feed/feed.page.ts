import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';

import { PostComponent } from '../post/post.component';
import { ModalController } from '@ionic/angular';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts: Array<Post>;
  userId: string = "666";

  sortedPosts() {
    if (typeof this.posts === 'undefined') return []
    else
    return this.posts.sort(
        (post1: Post, post2: Post): number => {return post2.created - post1.created}
    );
  }

  constructor(private postsService: PostsService, private modalController: ModalController) {
   }

  ngOnInit() {
    console.log('init')
    this.postsService.getAllPosts().subscribe(result => {
      this.posts = result.map(post => new Post(post));
    });
  }

  sendPost(data) {
    let newPost = new Post(data);
    this.postsService.createPost(newPost);
  }

  async createNewPost() {
    console.log('here');
    const modal = await this.modalController.create({
      component: NewPostComponent,
      componentProps: {
        'prop1': "000"
      }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
   }).catch((error) => {
      console.log(error);
    })

    await modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Post } from '../model/post';
import { User } from '../model/user';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post:Post;
  mainText: string;

  constructor(private modalController: ModalController,
    private navParams: NavParams) { 
      this.post = new Post();
    }

  ngOnInit() {
  }
  
  async myDismiss() {
console.log(this.mainText);

    this.post.created = Date.now();
    this.post.content = this.mainText;
    this.post.name = "ionicUser";

    console.log(this.post);
    await this.modalController.dismiss(this.post);
  }

}

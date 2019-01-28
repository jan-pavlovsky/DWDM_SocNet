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
    this.post.created = Date.now();
    this.post.content = this.mainText;
    this.post.user = new User({alias: "ionicUser"});

    
    await this.modalController.dismiss(this.post);
  }

}

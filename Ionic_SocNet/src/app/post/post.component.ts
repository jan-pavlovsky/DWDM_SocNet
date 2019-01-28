import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../model/post';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  deletePostEvent: EventEmitter<Post> = new EventEmitter();

  deletePost() {
    this.deletePostEvent.emit(this.post);
  }

  updatePost() {
    console.log("Update Post: " + this.post.id);
  }

  constructor() { }

  ngOnInit() {
  }

}

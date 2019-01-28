import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-generic-post',
  templateUrl: './generic-post.component.html',
  styleUrls: ['./generic-post.component.scss']
})
export class GenericPostComponent implements OnInit {

  @Input() post: Post;

  @Output()
  deletePostEvent: EventEmitter<Post> = new EventEmitter();

  deletePost() {
    this.deletePostEvent.emit(this.post);
  }

  updatePost() {
    console.log("Update Post: " + this.post.id);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

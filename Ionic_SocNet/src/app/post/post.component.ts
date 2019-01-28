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
  deletePostEvent: EventEmitter<string>;

  constructor() { }

  deletePost() {

  }

  ngOnInit() {
  }

}

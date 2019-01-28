import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-generic-post',
  templateUrl: './generic-post.component.html',
  styleUrls: ['./generic-post.component.scss']
})
export class GenericPostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

}

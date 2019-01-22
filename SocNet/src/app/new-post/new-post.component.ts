import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';
import { CompileTemplateMetadata } from '@angular/compiler';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: Post;
  public editor: ClassicEditor = ClassicEditor;

  constructor() {
      this.post = new Post();
   }

  @Output()
  complete: EventEmitter<Post> = new EventEmitter();


  ngOnInit() {
  }

  done() {
    this.complete.emit(this.post);
    this.post = new Post();
  }

}

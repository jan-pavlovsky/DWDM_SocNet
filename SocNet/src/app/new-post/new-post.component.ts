import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../model/post';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  editorData: string = "";
  post: Post;
  public editor: ClassicEditor = ClassicEditor;

  @Input()
  private poster: User

  @Output()
  complete: EventEmitter<Post> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService, private usersService:UsersService) {
    this.editorData = "Hey there, write somethin...";
    this.post = new Post();
  }

  public onChange({ editor }: ChangeEvent) {
    this.editorData = editor.getData();

    console.log(this.editorData);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let testUserId = this.route.snapshot.params.userId;

      this.usersService.getUserById(testUserId).toPromise().then((result) => {
        this.poster = new User({
          alias: result.get('alias'),
          fistName: result.get('firstName'),
          lastName: result.get('lastName'),
          id: testUserId});
      }).catch(() => {
        console.log('nic');
        this.poster = new User({ alias: "anonymous", id: "000", firstName: "a", lastName: "b" });
      });
   });
  }

  ngAfterViewInit() {
  }

  publishPost(post: Post) {
    console.log('posted');
    this.postsService.createPost(post);
  }

  done(succ: boolean) {
console.log(this.poster);

    if (succ) {
      this.post.user = this.poster;
      this.post.content = this.editorData;
      this.post.created = Date.now();

      this.complete.emit(this.post);
      this.publishPost(this.post);
      this.post = new Post();
    } 

    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
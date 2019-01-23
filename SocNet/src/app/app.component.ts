import { Component } from '@angular/core';
import { Post } from './post';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Test SocNet';

  creatingPost: boolean;

  posts: Array<any>;

  constructor(private router: Router, private firebaseService: FirebaseService) {
    this.creatingPost = false;
    console.log(environment.testVal);
  }

  newPost() {
    this.creatingPost = true;
  }
  publishPost(post: Post) {
    console.log('posting');
    this.firebaseService.addDocument();
    console.log('posted');
    this.creatingPost = false;
  }

  ngOnInit() {
    console.log('init')
    this.firebaseService.posts().subscribe(result => {
      this.posts = result;
    })
  }
}

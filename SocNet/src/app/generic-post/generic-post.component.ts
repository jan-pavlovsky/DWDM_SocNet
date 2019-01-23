import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-post',
  templateUrl: './generic-post.component.html',
  styleUrls: ['./generic-post.component.scss']
})
export class GenericPostComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}

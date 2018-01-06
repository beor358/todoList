import { Component, OnInit } from '@angular/core';
import { TestJsonService } from '../../../services/test-json.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private testJsonService: TestJsonService) { }

  ngOnInit() {
    console.log(this.posts = this.testJsonService.getPosts());
  }

}

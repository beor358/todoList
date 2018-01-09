import { Component, OnInit } from '@angular/core';
import { TestJsonService } from '../../services/test-json.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(
    private httpService: TestJsonService,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.httpService.getPosts().subscribe(
      (data: Post[]) => { 
        if(data.length) {
          this.posts = data;
        }
      },
      err => { console.log('Error!') }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestJsonService } from '../../services/test-json.service';

import { Post } from '../../classes/post';
import { Comment } from '../../classes/comment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: number;
  post: Post;
  comments: Comment[] = [];

  constructor(
    private httpService: TestJsonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getPostById(this.id)
    this.getComments(this.id)
  }

  getPostById(id: number) {
    this.httpService.getPostById(id).subscribe(
      data => { 
        if(data) {
          this.post = data
        } 
      },
      err => { console.log('Error!') }
    )
  }
  getComments(id: number) {
    this.httpService.getPostComents(id).subscribe(
      data => {
        if(data.length) {
          this.comments = data
        }
      },
      err => { console.log('Error!') }
    )
  }

}
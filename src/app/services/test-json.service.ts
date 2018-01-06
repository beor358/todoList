import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestJsonService {

  root = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post>(this.root+'/posts').subscribe(
      data => { console.log(data) },
      err => { console.log('Error!') }
    )
  }
  getPostById(id: number) {
    return this.http.get<Post>(this.root+'/posts/'+id).subscribe(
      data => { console.log(data) },
      err => { console.log('Error!') }
    )
  }
  getPostComents(id: number) {
    return this.http.get<Comment>(this.root+'/posts/'+id+'/comments' || this.root+'/comments?postId='+id).subscribe(
      data => { console.log(data) },
      err => { console.log('Error!') }
    )
  }

}
export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export class Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

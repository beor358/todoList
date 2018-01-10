import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';
import { Comment } from '../classes/comment';

@Injectable()
export class TestJsonService {

  root = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.root+'/posts');
  }
  getPostById(id: number) {
    return this.http.get<Post>(this.root+'/posts/'+id);
  }
  getPostComents(id: number) {
    return this.http.get<Comment[]>(this.root+'/posts/'+id+'/comments' || this.root+'/comments?postId='+id);
  }
  getPostsByUserId(userId: number) {
    return this.http.get<Post[]>(this.root+'/posts?userId='+userId);
  }
  postNewPost(post: Post) {
    return this.http.post(this.root+'/posts', post);
  }
}

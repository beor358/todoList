import { Component, OnInit } from '@angular/core';
import { TestJsonService } from '../../services/test-json.service';
import { Post } from '../../classes/post';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPostComponent } from '../add-post/add-post.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  addPostDialogRef: MatDialogRef<AddPostComponent>;
  posts: Post[] = [];
  //newPost: Post;
  //done: boolean = false;
  constructor(
    private httpService: TestJsonService,
    public dialog: MatDialog
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

  openDialog(): void {
    this.addPostDialogRef = this.dialog.open(AddPostComponent, {
      width: '400px',
      data: {
        name: 'Hello world!'
      }
    })

    this.addPostDialogRef.afterClosed()
    .pipe(filter(values => values))
    .subscribe(values => {
      this.httpService.postNewPost(new Post(values))
      .subscribe(
        (data: Post) => { console.log(data) },
        err => { console.log('Error!') }
      );
      //console.log(values)
    })
  }
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(AddPostComponent, {
  //     width: '400px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}

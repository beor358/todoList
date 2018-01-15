import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AnimateImagesComponent } from './components/animate-images/animate-images.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  // {
  // 	path: 'newtask',
  // 	component: CreateTaskComponent
  // },
  // {
  // 	path: 'task/:id',
  // 	component: EditTaskComponent
  // },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    children: [
      {
        path: 'comments',
        component: CommentsComponent
      }
    ]
  },
  {
    path: 'img',
    component: AnimateImagesComponent
  },
  {
    path: 'gmap',
    component: GmapsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todolist',
    pathMatch: 'full'
  },
  {
    path: 'todolist',
    component: TodoListComponent
  },
  {
  	path: 'newtask',
  	component: CreateTaskComponent
  },
  {
  	path: 'task/:id',
  	component: EditTaskComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

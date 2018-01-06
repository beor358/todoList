import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatCardModule, 
  MatToolbarModule, 
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TodoService } from './services/todo.service';
import { TestJsonService } from './services/test-json.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './components/posts/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TodoListComponent,
    EditTaskComponent,
    FilterPipe,
    PostsComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [
  	TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

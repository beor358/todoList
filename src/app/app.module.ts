import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TodoListComponent,
    EditTaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  	TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

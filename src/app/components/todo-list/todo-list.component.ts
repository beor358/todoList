import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {MatTableDataSource, MatSort} from '@angular/material';

import { TodoService } from '../../services/todo.service';
import { Task } from '../../classes/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  form: FormGroup;

  PRIORITYS = [
    'High',
    'Middle',
    'Low'
  ];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.createForm();
  }

  public deleteTask(task: Task): void {
    this.todoService.deleteTaskById(task.id);
  }

  public completeTask(task: Task): void {
    this.todoService.completeTaskById(task.id);
  }

  public sortTasksByName(ts: Array<Task>): void {
    this.todoService.sortTasksByName();
  }

  public sortTasksByDate(): void {
    this.todoService.sortTasksByDate();
  }

  public sortTasksByPriority(): void {
    this.todoService.sortTasksByPriority();
  }

  public sortTasksByCompleted(): void {
    this.todoService.sortTasksByCompleted();
  }

  public taskIsOverdue(task: Task): string {
    if (!task.completed) {
      let now = new Date;
      let finish = new Date(task.finishDate);
      if (finish.valueOf() - now.valueOf() < 0) {
        return '#FA9A9A';
      }
    }
    return ''
  }

  get tasks(): Array<Task> {
    return this.todoService.getTasks();
  }

  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      date: new FormControl(null),
      priority: new FormControl(null),
      completed: new FormControl(null)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../classes/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public deleteTask(task: Task): void {
  	this.todoService.deleteTaskById(task.id);
  }

  public completeTask(task: Task): void {
    this.todoService.completeTaskById(task.id);
  }

  public sortTasksByName(): void {
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
    if(!task.completed) {
      let now = new Date;
      let finish = new Date(task.finishDate);
      if(finish.valueOf() - now.valueOf() < 0) {
        return '#FA9A9A';
      }
    }
    return ''
  }

  get tasks(): Task[] {
  	return this.todoService.getTasks();
  }
}

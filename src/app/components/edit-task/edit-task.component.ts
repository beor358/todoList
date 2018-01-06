import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from '../../services/todo.service';
import { Task } from '../../classes/task';
import { Priority } from '../../classes/priority';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  
  @Input() task: Task;
  public priorityId: number;

  PRIORITYS = [
    'High',
    'Middle',
    'Low'
  ];
  constructor(
  	private todoService: TodoService,
  	private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  	this.getTask();
  }
  
  public deleteTask() {
  	this.todoService.deleteTaskById(this.task.id);
  }

  public updateTask(): void {
    this.task.priority = new Priority(this.task.priority.id);
  	this.todoService.updateTaskById(this.task.id, this.task);
  }

  public getTask(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.task = this.todoService.getTaskById(id);
  }

  public goBack(): void {
    this.location.back();
  }

}

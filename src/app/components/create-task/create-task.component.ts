import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      finishDate: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
    });
  }

  public addTask(): void {
  	this.todoService.addTask(this.form.value);
    this.form.reset();
  }

  public goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Location } from '@angular/common';
import { errorMessages } from '../../errors';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;
  errors = errorMessages;
  PRIORITYS = [
    'High',
    'Middle',
    'Low'
  ];
  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(32)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(128)
      ]),
      startDate: new FormControl(new Date(), Validators.required),
      finishDate: new FormControl(new Date(), Validators.required),
      priority: new FormControl(null, Validators.required),
    });
  }

  public addTask(): void {
    let priority = this.form.value.priority;
    delete this.form.value.priority;
  	this.todoService.addTask(this.form.value, priority);
    this.form.reset();
  }

  public goBack(): void {
    this.location.back();
  }
}

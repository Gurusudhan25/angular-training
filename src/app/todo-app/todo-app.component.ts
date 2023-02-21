import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  public taskData: object[] = [
    {task:"hi"}
  ];
  public status=false;
  public task = new FormControl('');
  public time = new FormControl('');
  createTask() {
    const taskObj = {
      task: this.task.value,
      time: this.time.value,
    };
    this.taskData.push(taskObj);
    this.status = true;
  }
  ngOnInit() {}
}

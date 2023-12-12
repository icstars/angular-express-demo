import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

import { Task } from '../task';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  tasks: Task[] = [];
  

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.getAllTasks();
    console.log("tasks received:")
    console.log(this.tasks)
  }

  getAllTasks() {
    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks 
    ) 
  }

  deleteTask(taskID: number) {
    // you have to subscribe, even if we're not getting any data "back" -
    // otherwise it doesn't actually execute
    // there are reasons to not call .subscribe() immediately, maybe?
    // a real-world implementation would really need to get a response back
    // in case the thing couldn't be deleted - database down, item deleted by
    // someone else already, etc.
    // you would do that based on the HTTP status code
    this.taskService.deleteTask(taskID).subscribe();
  }

}

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

}

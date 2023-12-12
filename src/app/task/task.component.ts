import { Component, OnInit, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class TaskComponent{

  // defining some defaults so TypeScript doesn't complain
  // we could probably manage this better in the Task definition in task.ts
  @Input({required: true}) task_data: Task = {id: 0, title: '<none>', description: '<none>'}; 

  constructor() {
    
  }

  deleteTask() {
    console.log(`clicked delete for task ID ${this.task_data.id}`)
  }
}

import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Task } from '../task';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

// inputs and outputs:
// https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

export class TaskComponent{

  // defining some defaults so TypeScript doesn't complain
  // we could probably manage this better in the Task definition in task.ts
  @Input({required: true}) task_data: Task = {id: 0, title: '<none>', description: '<none>'}; 

  @Output() deleteTaskEvent = new EventEmitter<number>;

  constructor() {
    
  }

  deleteTask() {
    console.log(`clicked delete for task ID ${this.task_data.id}`);
    this.deleteTaskEvent.emit(this.task_data.id);
    document.getElementById(`task_${this.task_data.id}`)?.remove()
    
  }
}

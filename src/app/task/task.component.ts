import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class TaskComponent{

  public task_title = 'hello'
  public task_description = 'description'

  constructor() {

  }
}

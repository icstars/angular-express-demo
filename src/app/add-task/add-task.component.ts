import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  task: Task = {title: '', description: ''};

  constructor(private taskService: TaskService) {

  }

  submitTask() {
    this.taskService.submitTask(this.task).subscribe();
  }

}

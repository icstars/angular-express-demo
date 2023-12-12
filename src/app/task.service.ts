import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { lastValueFrom, tap} from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  constructor(private http: HttpClient) {


  }

  getTasks() {
    console.log('getting tasks');
    let result = this.http.get<Task[]>('http://localhost:5000/api/tasks', {responseType: 'json'}).pipe(tap(_ => console.log(_)))
    return result;

  }
}

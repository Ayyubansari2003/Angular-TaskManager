import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(50px)' }))
      ])
    ])
  ]
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
      this.tasks = [...this.taskService.getTasks()]; 
    }
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
    this.tasks = [...this.taskService.getTasks()]; 
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);               
    this.tasks = [...this.taskService.getTasks()];
  }
}

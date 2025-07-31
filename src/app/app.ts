import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  template: `
    <h1>Task Manager</h1>
    <task-list></task-list>
  `,
  standalone: true,
  imports: [TaskListComponent]
})
export class App {}

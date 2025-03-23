import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newTaskTitle = signal<string>('');

  addTask() {
    if (this.newTaskTitle()) {
      console.log(`New Task Added: ${this.newTaskTitle()}`);
      this.newTaskTitle.set(''); 
    }
  }
} 

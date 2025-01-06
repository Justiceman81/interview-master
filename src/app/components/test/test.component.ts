import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
// import { HighlightDirective } from '../../directive/highlight.directive';
// import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './_test.component.scss',
})
export class TestComponent implements OnInit {
  newTask: string = '';
  tasks: string[] = [];

  constructor() {}

  private todoService = inject(TodoService);

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.todoService.getTasks();
  }
}
// title = 'This is interpolation';
// firstName = 'Maxim';
// lastName = 'Kuznetsov';
// isEnabled: boolean = false;
// isActive: boolean = false;
// isDisabled: boolean = true;
// isClickedState: boolean = false;
// inputText: string = '';
// users = ['Alina', 'Ivan', 'Serhii', 'Diana'];
// items = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Orange' },
//   { id: 4, name: 'Kiwi' },
//   { id: 5, name: 'Grape' },
// ];
// appState = 'paused';
// today = new Date();
// longText = 'Very long text that needs to be trimmed';
// @Input() childMessage: string = 'Test';
// @Output() messageFromChild = new EventEmitter<string>();
// getFullName() {
//   return `My name is ${this.firstName} ${this.lastName}`;
// }
// toggleState() {
//   this.isClickedState = true;
// }
// sendMessageToParent() {
//   this.messageFromChild.emit('I am your child');
// }

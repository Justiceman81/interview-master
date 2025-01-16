import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
} from '@angular/forms';
// import { TodoService } from '../../services/todo.service';
// import { HighlightDirective } from '../../directive/highlight.directive';
// import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './_test.component.scss',
})
export class TestComponent {
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 99;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 99' };
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid:', this.complexForm.valid);
    console.log('Form controls:', this.complexForm.controls);
  }

  get name() {
    return this.complexForm.get('name');
  }

  get email() {
    return this.complexForm.get('email');
  }

  get age() {
    return this.complexForm.get('age');
  }

  get password() {
    return this.complexForm.get('password');
  }

  get consent() {
    return this.complexForm.get('consent');
  }
}
// newTask: string = '';
// tasks: string[] = [];

// constructor() {}

// private todoService = inject(TodoService);

// ngOnInit() {
//   this.tasks = this.todoService.getTasks();
// }

// addTask() {
//   if (this.newTask.trim() !== '') {
//     this.todoService.addTask(this.newTask.trim());
//     this.newTask = '';
//     this.updateTasks();
//   }
// }

// removeTask(index: number) {
//   this.todoService.removeTask(index);
//   this.updateTasks();
// }

// private updateTasks() {
//   this.tasks = this.todoService.getTasks();
// }

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

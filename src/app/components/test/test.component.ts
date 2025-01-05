import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './_test.component.scss',
})
export class TestComponent {
  title = 'This is interpolation';
  firstName = 'Maxim';
  lastName = 'Kuznetsov';

  isEnabled: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = true;
  isClickedState: boolean = false;
  inputText: string = '';

  @Input() childMessage: string = 'Test';

  @Output() messageFromChild = new EventEmitter<string>();

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('I am your child');
  }
}

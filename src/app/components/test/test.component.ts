import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directive/highlight.directive';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, TruncatePipe],
  templateUrl: './test.component.html',
  styleUrl: './_test.component.scss',
})
export class TestComponent {
  // title = 'This is interpolation';
  // firstName = 'Maxim';
  // lastName = 'Kuznetsov';

  // isEnabled: boolean = false;
  // isActive: boolean = false;
  // isDisabled: boolean = true;
  isClickedState: boolean = false;
  inputText: string = '';

  users = ['Alina', 'Ivan', 'Serhii', 'Diana'];

  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Kiwi' },
    { id: 5, name: 'Grape' },
  ];

  appState = 'paused';

  today = new Date();
  longText = 'Very long text that needs to be trimmed';

  @Input() childMessage: string = 'Test';

  @Output() messageFromChild = new EventEmitter<string>();

  // getFullName() {
  //   return `My name is ${this.firstName} ${this.lastName}`;
  // }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('I am your child');
  }
}

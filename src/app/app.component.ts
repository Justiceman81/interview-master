import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './_app.component.scss',
})
export class AppComponent {
  title = 'interview-master';

  // messageFromParent = 'I am your parent';

  // messageFromChild = '';

  // getMessageFromChild(message: string) {
  //   this.messageFromChild = message;
  // }
}

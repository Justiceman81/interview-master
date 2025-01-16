import { CommonModule } from '@angular/common';
import { Component, WritableSignal, effect, signal } from '@angular/core';
import { QUESTIONS } from '../../constants';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './angular.component.html',
  styleUrl: './_angular.component.scss',
})
export class AngularComponent {
  questions: WritableSignal<any[]> = signal(QUESTIONS);

  constructor() {
    effect(() => {
      console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
    });

    setTimeout(() => {
      this.addQuestionOnce();
    }, 5000);
  }

  addQuestionOnce() {
    const newQuestion = {
      number: this.questions.length + 1,
      question: `New question ${this.questions().length + 1}`,
      difficulty: 'Easy',
    };
    this.questions.set([...this.questions(), newQuestion]);
  }
}

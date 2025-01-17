import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  of,
  forkJoin,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';
import { delay, filter, map, tap } from 'rxjs/operators';
// import { QUESTIONS } from '../../constants';
// import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './_angular.component.scss',
})
export class AngularComponent implements OnInit {
  // questions: WritableSignal<any[]> = signal(QUESTIONS);
  // constructor() {
  //   effect(() => {
  //     console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
  //   });
  //   setTimeout(() => {
  //     this.addQuestionOnce();
  //   }, 5000);
  // }
  // addQuestionOnce() {
  //   const newQuestion = {
  //     number: this.questions.length + 1,
  //     question: `New question ${this.questions().length + 1}`,
  //     difficulty: 'Easy',
  //   };
  //   this.questions.set([...this.questions(), newQuestion]);
  // }
  //------------------- Subjects --------------------
  // subjectFirst = new Subject<number>();

  // observable = this.subjectFirst.asObservable();

  // behaviorSubject = new BehaviorSubject<number>(0);

  // replaySubject = new ReplaySubject<number>(2);

  // asyncSubject = new AsyncSubject<number>();

  // observableFirst = new Observable((subscriber) => {
  //   subscriber.next('Hello from RxJs!');
  //   subscriber.complete();
  // });
  // observableSecond = of('First value', 'Second value', 'Third value');
  // observableThird = from(['First value', 'Second value', 'Third value']);
  // observableFourth = from([1, 2, 3]);
  // observableFifth = new Observable<string>((subscriber) => {
  //   subscriber.next('Start of thread!');
  //   subscriber.next('Data processing!');
  //   subscriber.error('Error, something went wrong!');
  //   subscriber.next('This value will not be sent!');
  //   subscriber.complete();
  // });
  behaviorSubject = new BehaviorSubject<number>(0);

  observable1 = of('Request 1').pipe(delay(1000));
  observable2 = of('Request 1').pipe(delay(500));
  observable3 = of('Request 1').pipe(delay(2000));

  combined = forkJoin([this.observable1, this.observable2, this.observable3]);

  ngOnInit(): void {
    // this.subjectFirst.next(1);
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підписник 1', value),
    //   error: (error) => console.error('Підписник 1', error),
    //   complete: () => console.log('Підписник 1', 'Completed!'),
    // });
    // this.subjectFirst.next(2);
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підписник 2', value),
    //   error: (error) => console.error('Підписник 2', error),
    //   complete: () => console.log('Підписник 2', 'Completed!'),
    // });
    // this.subjectFirst.next(3);
    // this.subjectFirst.complete();
    //----------------BehaviorSubject----------------//
    // this.behaviorSubject.subscribe(value =>console.log('Підписник 1', value));
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);
    // this.behaviorSubject.subscribe(value => console.log('Підписник 2', value));
    // this.behaviorSubject.next(3);
    // this.behaviorSubject.complete();
    //----------------ReplaySubject----------------//
    // this.replaySubject.next(1);
    // this.replaySubject.next(2);
    // this.replaySubject.next(3);
    //  this.replaySubject.subscribe(value => console.log('Підписник', value));
    // this.replaySubject.complete();
    //----------------AsyncSubject----------------//
    // this.asyncSubject.next(1);
    // this.asyncSubject.next(2);
    // this.asyncSubject.next(3);
    // this.asyncSubject.subscribe(value => console.log('Підписник', value));
    // this.asyncSubject.next(3);
    // this.asyncSubject.complete();
    //----------------Використання операторів tap, filter, map ----------------//
    // this.behaviorSubject
    //   .pipe(
    //     tap((value) => console.log('BehaviorSubject', value)),
    //     filter((value) => value > 0),
    //     map((value) => value * 10)
    //   )
    //   .subscribe({
    //     next: (value) => console.log(value),
    //     complete: () => console.log('Completed!'),
    //   });
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);
    // this.behaviorSubject.next(-1);
    // this.behaviorSubject.next(3);
    // this.behaviorSubject.complete();
    //----------------Використання оператора forkJoin ----------------//

    this.combined.subscribe({
      next: ([response1, response2, response3]) => {
        console.log('Result forkJoin', response1, response2, response3);
      },
      complete: () => console.log('All responses received!'),
    });
  }
  // ngOnInit(): void {
  //   this.observableFifth.subscribe({
  //     next: (value) => console.log(value),
  //     error: (error) => console.error(error),
  //     complete: () => console.log('Completed!'),
  //   });
  //   this.observableSecond.subscribe({
  //     next: (value) => console.log(value),
  //     complete: () => console.log('Completed!'),
  //   });
  //   this.observableThird.subscribe({
  //     next: (value) => console.log(value),
  //     complete: () => console.log('Completed!'),
  //   });
  //   this.observableFourth.subscribe((value) => (console.log, value));
  //   this.observableFirst.subscribe({
  //     next: (value) => console.log(value),
  //     error: (error) => console.error(error),
  //     complete: () => console.log('Completed!'),
  //   });
  // }
}

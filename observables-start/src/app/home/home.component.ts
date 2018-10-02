import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Observer, Subscription, interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  observableSubscription: Subscription;
  numbersObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map((data: number) => {
      return data * 2;
    }));
    this.numbersObservableSubscription = myNumbers.subscribe((number: number) => {
      console.log(number);
    })

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        observer.error('this does not work')
      }, 4000);
    });

    this.observableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('Completed') }
    );
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
    this.numbersObservableSubscription.unsubscribe();
  }

}

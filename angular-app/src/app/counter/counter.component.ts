import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './counter.reducer';
import { selectCount } from './counter.selector';
import * as CounterActions from './counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  // type 1
  count$;

  // type 2
  // count$: Observable<number>;

  //constructor(private store: Store<{ count: number }>) {
  constructor(private store: Store<State>) {
    // type : 1
    this.count$ = this.store.select(selectCount);

    // type : 2
    // this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  increment() {
    // this.count++;
    console.log(this.store);

    this.store.dispatch(CounterActions.increment({ propA: 1, propB: 'str' }));
    // this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    // this.count--;
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    // this.count = 0;
    this.store.dispatch(CounterActions.reset());
  }
}

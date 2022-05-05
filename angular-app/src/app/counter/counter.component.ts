import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './counter.reducer';
import { selectCount } from './counter.selector';
import * as CounterActions from './counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // count$ = this.store.pipe(select(selectCount));
  //count$: Observable<number>
  count$: Observable<number>

  //constructor(private store: Store<{ count: number }>) {
  constructor(private store: Store<State>) {
    this.count$ = store.select('count');
    // this.count$ = store.select(select(selectCount));
  }

  ngOnInit(): void {
  }

  increment() {
    // this.count++;
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    // this.count--;
    this.store.dispatch(CounterActions.decrement())
  }

  reset() {
    // this.count = 0;
    this.store.dispatch(CounterActions.reset());
  }
}

import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const featureName = 'count_hoge';

export interface user {
  name: string;
}
export interface State {
  count: number;
  users: user[];
}

/**
 * TYPE 1
 */
export const initialState: State = {
  count: 0,
  users: [{ name: 'aa' }, { name: 'bb' }],
};

const _counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.reset, (state) => ({ ...state, count: 0 }))
);
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

/**
 * TYPE 2
 */
// export const initialState = -5;
// export const counterReducer = createReducer(
//   initialState,
//   on(CounterActions.increment, (state) => state + 1),
//   on(CounterActions.reset, (state) => 0),
//   on(CounterActions.decrement, (state) => state - 1)
// );

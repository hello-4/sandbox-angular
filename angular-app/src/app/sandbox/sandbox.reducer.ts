import { createReducer, on } from '@ngrx/store';
import * as SandboxActions from './sandbox.actions';
import { User } from '../interfaces/user';
import { Hero } from '../interfaces/hero';

export const featureName = 'sandbox';

export interface State {
  listA: Hero[];
  users: User[];
  testStr: string;
}

export const initialState: State = {
  listA: [],
  users: [],
  testStr: '',
};

const _sandboxReducer = createReducer(
  initialState,
  on(SandboxActions.update1, (state, { pDummy, pUsers }) => ({
    ...state,
    // users: [(state.users = users)],
    users: pUsers,
    testStr: pDummy ?? 'default dummy',
  }))
);

export function sandboxReducer(state: any, action: any) {
  return _sandboxReducer(state, action);
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

import { createAction, props } from '@ngrx/store';
import { State } from './counter.reducer';
enum ACTIONS {
  INCREMENT = '[Counter Component] increment',
  DECREMENT = '[Counter Component] decrement',
  REST = '[Counter Component] reset',
}

export const increment = createAction(
  ACTIONS.INCREMENT,
  props<{ propA: number; propB: string }>()
);
export const decrement = createAction(ACTIONS.DECREMENT);
export const reset = createAction(ACTIONS.REST);

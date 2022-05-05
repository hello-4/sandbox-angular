import { createAction } from '@ngrx/store';

enum ACTIONS {
    INCREMENT = '[Counter Component] increment',
    DECREMENT = '[Counter Component] decrement',
    REST = '[Counter Component] reset'
}

export const increment = createAction(ACTIONS.INCREMENT);
export const decrement = createAction(ACTIONS.DECREMENT);
export const reset = createAction(ACTIONS.REST);
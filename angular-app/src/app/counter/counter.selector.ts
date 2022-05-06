import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from './counter.reducer';

let logs: string[] = [];

export const selectCounterState = createFeatureSelector<State>(featureName);
export const selectCount = createSelector(selectCounterState, (state) => {
  console.log('[debug_1123]_', state);
  return state.count;
});

/**
 * 今回は使用しませんが、stateに副作用をかけることも可能です。
 * 例えば、countの2倍を返すSelector
 */
export const selectCountDouble = createSelector(
  selectCounterState,
  (state) => state.count * 2
);

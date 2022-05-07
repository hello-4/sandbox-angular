import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from '../sandbox/sandbox.reducer';

let logs: string[] = [];

export const selectSandboxState = createFeatureSelector<State>(featureName);
export const selectUpdateUsers = createSelector(selectSandboxState, (state) => {
  console.log('[debug_4345]_', state);
  return state.users;
});
export const selectUsers = createSelector(
  selectSandboxState,
  (state) => state.users
);

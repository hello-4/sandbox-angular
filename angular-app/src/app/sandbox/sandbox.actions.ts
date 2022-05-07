import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user';

enum ACTIONS {
  UPDATE = '[Sandbox ngrx Component] update',
}

export const update1 = createAction(
  ACTIONS.UPDATE,
  props<{ hoge?: number; pDummy?: string; pUsers: User[] }>()
);
export const update2 = createAction(
  ACTIONS.UPDATE,
  props<{ pUsers: number }>()
);

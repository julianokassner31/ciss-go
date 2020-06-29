import { createAction, props } from '@ngrx/store';
import { Token } from 'src/app/model';
export const saveToken = createAction(
  '[Token Component] SaveToken',
  props<{ token: Token }>()
);

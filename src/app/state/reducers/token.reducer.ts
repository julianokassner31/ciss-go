import { createReducer, on } from '@ngrx/store';
import { saveToken } from '../actions/token.actions';

export const initialState = null;

const _tokenReducer = createReducer(
  initialState,
  on(saveToken, (state) => {
    return { ...state, token: state };
  })
);

export function tokenReducer(state, action) {
  return _tokenReducer(state, action);
}

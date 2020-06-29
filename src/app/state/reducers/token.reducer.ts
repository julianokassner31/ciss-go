import { createReducer, on } from '@ngrx/store';
import { Token } from 'src/app/model';
import { saveToken } from '../actions/token.actions';

export const initialState = null;

const _tokenReducer = createReducer(
  initialState,
  on(saveToken, (state) => state)
);

export function tokenReducer(state, action) {
  return _tokenReducer(parseToken(state), action);
}

function parseToken(data: any) {
  return new Token(data);
}

import { createReducer, on } from '@ngrx/store';
import { hideLoading, showLoading } from '../actions/loading.action';

export const initialState = null;

const _loadingReducer = createReducer(
  initialState,
  on(showLoading, (state) => {
    return Object.assign({}, state, new Boolean(true));
  }),
  on(hideLoading, (state) => {
    return Object.assign({}, state, new Boolean(false));
  })
);

export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}

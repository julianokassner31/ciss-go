import { createReducer, on } from '@ngrx/store';
import { hideLoading, showLoading } from '../actions/loading.action';

export const initialState = false;

const _loadingReducer = createReducer(
  initialState,
  on(showLoading, (state) => true),
  on(hideLoading, (state) => false)
);

export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}

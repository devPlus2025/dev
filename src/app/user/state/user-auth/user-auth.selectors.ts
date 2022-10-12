import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-auth.reducer';
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<UserState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.user ? true : false;
});

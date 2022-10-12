import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-auth.reducer';
export const AUTH_STATE_NAME = 'user';

const getAuthState = createFeatureSelector<UserState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
    console.log('state.user', state.user);
    return state.user ? true : false;
});

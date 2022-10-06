import { UserRegsiterReducer, UserState } from '../state/user-auth/user-auth.reducer';
import { AUTH_STATE_NAME } from '../state/user-auth/users.selector';

export interface AppState {
    [AUTH_STATE_NAME]: UserState | any;
}

export const appReducer = {
    [AUTH_STATE_NAME]: UserRegsiterReducer,
};

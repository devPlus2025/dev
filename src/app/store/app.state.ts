import { UserRegsiterReducer, UserState } from '../user/state/user-auth/user-auth.reducer';
import { AUTH_STATE_NAME } from '../user/state/user-auth/user-auth.selectors';

export interface AppState {
    [AUTH_STATE_NAME]: UserState;
}

export const appReducer = {
    [AUTH_STATE_NAME]: UserRegsiterReducer,
};

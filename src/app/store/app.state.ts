import { MenuItem } from '../common/menuItem-modele/menuItem.modele';
import { MenuReducer } from '../user-orders/state/menuItem.reducers';
import { HEADER_MENU } from '../user-orders/state/menuItem.selectors';
import { UserRegsiterReducer, UserState } from '../user/state/user-auth/user-auth.reducer';
import { AUTH_STATE_NAME } from '../user/state/user-auth/user-auth.selectors';

export interface AppState {
    [AUTH_STATE_NAME]: UserState;
    [HEADER_MENU]: MenuItem;
}

export const appReducer = {
    [AUTH_STATE_NAME]: UserRegsiterReducer,
    [HEADER_MENU]: MenuReducer,
};

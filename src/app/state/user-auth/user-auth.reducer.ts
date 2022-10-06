import { createReducer, on } from '@ngrx/store';
import { registerSucess } from './user-auth.actions';
import { User } from '../../common/user-modele/user.model';

export interface UserState {
    user: User | null;
}

export const initialeState: UserState | any = {
    user: null,
};

export const _userRegsiterReducer = createReducer(
    initialeState,
    on(registerSucess, (state, action) => {
        console.log('action', action);
        return {
            ...state,
            user: action.user,
        };
    }),
);

export function UserRegsiterReducer(state: any, action: any) {
    return _userRegsiterReducer(state, action);
}

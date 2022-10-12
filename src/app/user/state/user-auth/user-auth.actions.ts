import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/common/user-modele/user.model';

export enum RegisterActionTypes {
    SIGNUP_REQUEST = '[Register] Request',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
}

export const registerRequest = createAction(
    RegisterActionTypes.SIGNUP_REQUEST,
    props<{ email: string; username: string; password: string }>(),
);
export const registerSucess = createAction(
    RegisterActionTypes.SIGNUP_SUCCESS,
    props<{ user: User }>(),
);
export const registerFailure = createAction(
    RegisterActionTypes.SIGNUP_FAILURE,
    props<{ error: any }>(),
);

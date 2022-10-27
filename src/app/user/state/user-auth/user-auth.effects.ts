import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerRequest, registerSucess } from './user-auth.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared-actions';
import { User } from 'src/app/common/user-modele/user.model';
import { of } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-services/user-auth.service';

@Injectable()
export class UserAuthEffects {
    constructor(
        private actions$: Actions,
        private userAuthService: UserAuthService,
        private store: Store<any>,
    ) {}

    // effects go here
    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerRequest),
            exhaustMap((action) => {
                return this.userAuthService
                    .userSignUp(action.email, action.password, action.username)
                    .pipe(
                        map((data: User) => {
                            console.log('data in effect ', data);
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.userAuthService.setUserInLocalStorage(data);
                            return registerSucess({ user: data });
                        }),
                        catchError((errResp) => {
                            return of(errResp);
                        }),
                    );
            }),
        );
    });
}

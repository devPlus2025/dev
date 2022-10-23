import * as MenuItemsAction from './menuItem.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserOrderMenuItemService } from 'src/app/services/user-order-menu-service/order-menu.service';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';

@Injectable()
export class MenuItemEffect {
    constructor(
        private actions$: Actions,
        private userOrderMenuItemService: UserOrderMenuItemService,
    ) {}

    menu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuItemsAction.MenuActionTypes.MenuItemsRequest),
            mergeMap(() =>
                this.userOrderMenuItemService.getAllMenuItems().pipe(
                    map((item: MenuItem) => console.log('item', item)),
                    catchError((errResp) => {
                        return of(errResp);
                    }),
                ),
            ),
        ),
    );
}

//     menuItem$ = createEffect(() => this.action$.pipe(
//         ofType(MenuItemsAction.MenuActionTypes.MenuItemsRequest),
//         mergeMap(()=>
// this.userOrderMenuItemService.getAllMenuItems().pipe(
// map(
//     (item: any) => console.log(item)
// )
//   )
//     )
//       ))

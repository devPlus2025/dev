import { Action } from '@ngrx/store';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';

export enum MenuActionTypes {
    MenuItemsRequest = '[MenuItems] Request',
    MenuItemsSucess = '[MenuItems] Signup Success',
    MenuItemsFailure = '[MenuItems] Signup Failure',
}

export class MenuItemsRequest implements Action {
    readonly type = MenuActionTypes.MenuItemsRequest;
}

export class MenuItemsSucess implements Action {
    readonly type = MenuActionTypes.MenuItemsSucess;
    constructor(public payload: MenuItem) {}
}

export class MenuItemsFailure implements Action {
    readonly type = MenuActionTypes.MenuItemsFailure;
    constructor(public payload: any) {}
}

export type MenuActionsCombined = MenuItemsRequest | MenuItemsSucess | MenuItemsFailure;

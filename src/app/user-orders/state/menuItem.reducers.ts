import * as MenuItemsActionImportFromReducer from './menuItem.actions';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';

export const initialState: MenuItem = {
    firstItem: '',
    secondItem: '',
    thirdItem: '',
    forthItem: '',
};

export const _menuReducer = (
    state: MenuItem = initialState,
    action: MenuItemsActionImportFromReducer.MenuActionsCombined,
): any => {
    switch (action.type) {
        case MenuItemsActionImportFromReducer.MenuActionTypes.MenuItemsRequest: {
            return {
                ...state,
            };
        }
        case MenuItemsActionImportFromReducer.MenuActionTypes.MenuItemsSucess: {
            return {
                ...state,
                firstItem: action.payload.firstItem,
                secondItem: action.payload.secondItem,
                thirdItem: action.payload.thirdItem,
                forthItem: action.payload.forthItem,
            };
        }
        default: {
            return state;
        }
    }
};

export function MenuReducer(state: any, action: any) {
    return _menuReducer(state, action);
}

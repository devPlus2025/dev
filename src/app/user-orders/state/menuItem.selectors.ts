import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';
export const HEADER_MENU = 'headerMenu';

const getHeaderMenu = createFeatureSelector<MenuItem>(HEADER_MENU);

export const isMenuAvailable = createSelector(getHeaderMenu, (state: MenuItem) => {
    return state.firstItem ? true : false;
});

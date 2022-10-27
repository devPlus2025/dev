import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';
import { UserOrderMenuItemService } from 'src/app/services/user-order-menu-service/order-menu.service';

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
    public menuItem: MenuItem = {};
    constructor(private userOrderMenuItem: UserOrderMenuItemService) {}

    ngOnInit(): void {
        const isEmpty: boolean = true;
        this.getMenuItem();
    }

    public getMenuItem(): void {
        this.userOrderMenuItem.getAllMenuItems().subscribe((item: MenuItem) => {
            console.log('item', item);
            item = this.menuItem;
        });
    }
}

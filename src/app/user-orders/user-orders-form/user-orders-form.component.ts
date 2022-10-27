import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-orders-form',
    templateUrl: './user-orders-form.component.html',
    styleUrls: ['./user-orders-form.component.scss'],
})
export class UserOrdersFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const isEmpty: boolean = true;
    }
}

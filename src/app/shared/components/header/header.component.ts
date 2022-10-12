import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public testEslint: any = '';
    public firstMenuItems: string[] = ['Action', 'Another action', 'Something else here'];
    public secondMenuItems: string[] = ['Action', 'Another action', 'Something else here'];
    public tabItems: string[] = [];

    constructor() {}

    ngOnInit(): void {
        const noEmptyTestEslint: boolean = true;
    }

    addItem(item: any): void {
        this.tabItems.push(item.target.textContent);
    }

    handleClose(event: any) {
        console.log(event);
    }
}

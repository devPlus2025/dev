import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/common/menuItem-modele/menuItem.modele';

@Injectable({
    providedIn: 'root',
})
export class UserOrderMenuItemService {
    private baseUrl: string = 'api/menuItem';
    constructor(private http: HttpClient) {}

    getAllMenuItems = () => this.http.get<MenuItem>(this.baseUrl);
}

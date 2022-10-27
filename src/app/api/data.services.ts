//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
    providedIn: 'root',
})
export class DataService implements InMemoryDbService {
    constructor() {}
    createDb() {
        return {
            menuItem: [
                {
                    firstItem: 'ejemplo 1',
                    secondItem: 'ejemplo 2',
                    thirdItem: 'ejemplo 3',
                    forthItem: 'ejemplo 4',
                },
            ],
        };
    }
}

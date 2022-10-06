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
            users: [],
        };
    }
}

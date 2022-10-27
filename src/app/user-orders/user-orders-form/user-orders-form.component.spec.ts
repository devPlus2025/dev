import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersFormComponent } from './user-orders-form.component';

describe('UserOrdersFormComponent', () => {
    let component: UserOrdersFormComponent;
    let fixture: ComponentFixture<UserOrdersFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserOrdersFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserOrdersFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

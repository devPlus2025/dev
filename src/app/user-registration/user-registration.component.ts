import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../common/user-modele/user.model';
import { UserAuthService } from '../services/user-services/user-auth.service';
import { registerRequest, registerSucess } from '../state/user-auth/user-auth.actions';
import { isAuthenticated } from '../state/user-auth/users.selector';
import { AppState } from '../store/app.state';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
    public userRegisterForm!: FormGroup; // ! not recommanded
    isAuthenticated!: Observable<boolean>;
    constructor(private userService: UserAuthService, private fb: FormBuilder, private store: Store<AppState>) {}

    ngOnInit(): void {
        this.isAuthenticated = this.store.select(isAuthenticated);
        console.log('isAuthenticated', isAuthenticated);
        this.userRegisterForm = this.fb.group({
            email: '',
            username: '',
            password: '',
        });
        this.getProducts();
    }

    private getProducts() {
        this.userService.getUser().subscribe((users) => console.log('users', users));
    }

    public saveUser(): void {
        const email: string = this.userRegisterForm.value.email;
        const username: string = this.userRegisterForm.value.username;
        const password: string = this.userRegisterForm.value.password;
        isAuthenticated;
        this.store.dispatch(registerRequest({ email, username, password }));
    }
}

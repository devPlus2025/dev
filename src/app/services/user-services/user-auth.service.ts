import { Injectable } from '@angular/core';
import { User } from '../../common/user-modele/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class UserAuthService {
    private userUrl = 'api/users/';
    constructor(private http: HttpClient) {}

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            }),
        );
    }

    setUserInLocalStorage(user: User) {
        localStorage.setItem('userData', JSON.stringify(user));
    }

    userSignUp(email: string, password: string, username: string): Observable<User> {
        return this.http.post<User>(this.userUrl, { email, password, username }).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            }),
        );
    }

    // formatUser(data: User) {
    //     // const expirationDate = new Date(
    //     //   new Date().getTime() + +data.expiresIn * 1000
    //     // );
    //     const user = new User(data.email, data.password, data.username);
    //     return user;
    // }
}

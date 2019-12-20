import { User } from './../user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public loading = false;

    baseUrl = environment.baseUrl;
    currentUser: User[];
    constructor(private http: HttpClient) { }

    registerUser(userData): Observable<any> {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

        return this.http.post(`${this.baseUrl}/users/`, userData, options)
            .pipe(tap(data => {
                this.currentUser = <any>data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    getUser(): Observable<any>  {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        let user = JSON.parse(localStorage.getItem('currentUser'));

        return this.http.get<User>(`${this.baseUrl}/users/${user.username}`)
            .pipe(tap(data => {
                this.currentUser = <any>data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    getFormUser(control): Observable<any> {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

        return this.http.get<User>(`${this.baseUrl}/users/${control}`)
            .pipe(tap(data => {
                this.currentUser = <any>data
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }
    
    loginUser(userData): Observable<any> {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

        return this.http.post(`${this.baseUrl}/auth/`, userData)
        .pipe(tap(data => {
            this.currentUser = <any>data['user'];
            localStorage.setItem('currentUser', JSON.stringify(data));
        }))
        .pipe(catchError(err => {
            return of(false);
        }))
    }

    isAuthenticated() {
        // get the auth token from localStorage
        let user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(user);

        // check if token is set, then...
        if (user && user.token) {
            return true;
        }

        return false;
    }

    }

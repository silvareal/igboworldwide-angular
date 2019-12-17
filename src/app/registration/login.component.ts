import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loading = false;
    login;
    loginInvalid = false;
    constructor(private userService: UserService, private router:Router) { }

    ngOnInit() {
        this.login = {
            username: '',
            password: '',
        }
    } 

    loginUser() {
        this.loading = true;
        this.userService.loginUser(this.login)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true;
                    this.loading = false;
                } else {
                    this.router.navigate(['certificate']);
                    console.log(this.login);
                    this.loading = false;
                }
            })
    }
}
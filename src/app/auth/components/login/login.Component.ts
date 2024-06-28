
import {Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector:'app-LoginPage',
    templateUrl:'./login.Component.html',
    styleUrls:['./login.Component.css','../signup/signup.component.css']
})
export class LoginComponent {
    @ViewChild('passwordInput') passwordInput! : ElementRef<HTMLInputElement>;
    passwordType:string ='password'
    isPasswordVisible:boolean = false
    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
        this.passwordType = this.isPasswordVisible ? 'text' : 'password';
    }
}
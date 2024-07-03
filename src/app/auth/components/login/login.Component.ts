
import {Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";

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
    loginForm!:FormGroup
    constructor(private fb:FormBuilder, private userService :UserService,private router:Router){
        this.loginForm = this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.minLength(8)]]
        })

    }
    data:any
    onLogin(){
        this.data = this.loginForm.value
        const {email,password}= this.data 
        if(!email){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Enter Valid Email'
            errorInEmail!.style.color = 'red'
            errorInEmail!.style.fontSize ='15px'
        }else if(!password){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Password Incorrect'
            errorInEmail!.style.color = 'red'
            errorInEmail!.style.fontSize ='15px'
        }else{
            
            this.userService.login(this.data).subscribe({
                
                next:(res:any)=>{
                    this.router.navigate(['/']) 
                }
            })
        }
    }
    
}
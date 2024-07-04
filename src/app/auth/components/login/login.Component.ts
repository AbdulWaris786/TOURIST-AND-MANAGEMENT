
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
            this.ShowError('Enter Valid Email');
        }else if(!password){
            this.ShowError('Password Incorrect');
        }else{
            
            this.userService.login(this.data).subscribe({
                
                next:(res:any)=>{
                    this.router.navigate(['/']) 
                },
                error:(err)=>{
                    this.ShowError(err.error.message || 'Login failed');
                }
            })
        }
    }
    private ShowError(message:string){
        const errorInEmail = document.getElementById('EmailVerification')
        if(errorInEmail){
            errorInEmail.textContent = message;
            errorInEmail.style.color = 'red';
            errorInEmail.style.fontSize = '15px';
        }
    }
    
}
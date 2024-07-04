import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { DataSharingService } from "../service/userData.service";
import { Subscription, interval, take } from "rxjs";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css', '../signup/signup.component.css']
})
export class OtpComponent implements OnInit, OnDestroy {
  otpForm!: FormGroup;
  otpCode: any;
  userEmail: string = '';
  timeLeft: number = 60;
  canVerify: boolean = true;
  timerSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private userDataService: DataSharingService
  ) {
    this.otpForm = this.fb.group({
      otp1: ['', Validators.required],
      otp2: ['', Validators.required],
      otp3: ['', Validators.required],
      otp4: ['', Validators.required],
      otp5: ['', Validators.required],
      otp6: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userDataService.sharedData.subscribe(data => {
      this.userEmail = data;
    });
    this.startTimer();
    
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  autoInputChange(currentInput: HTMLInputElement, nextInput: HTMLInputElement | null): void {
    if (currentInput.value.length === currentInput.maxLength) {
      nextInput?.focus();
      if (nextInput?.value) {
        nextInput.select();
      }
    } else if (currentInput.value.length === 0) {
      (currentInput.previousElementSibling as HTMLInputElement)?.focus();
      if ((currentInput.previousElementSibling as HTMLInputElement).value) {
        (currentInput.previousElementSibling as HTMLInputElement)?.select();
      }
    }
  }

  startTimer() {
    this.timeLeft = 30;
    // this.canVerify = true;
    this.timerSubscription = interval(1000)
      .pipe(take(31))
      .subscribe(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else{
            this.canVerify = false;
            
            this.timerSubscription.unsubscribe();
          
        }
      });
  }

  resend() {
    this.userService.resentOtp(this.userEmail).subscribe({
      next: (res: any) => {
        this.startTimer();
      },
      error: (err: any) => {
        console.error('OTP Resend Failed', err);
      }
    });
  }

  onOtp() {
    this.otpCode = this.otpForm.value;
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.otpCode;
    if (!otp1 || !otp2 || !otp3 || !otp4 || !otp5 || !otp6) {
      this.ShowError('Enter Valid OTP');
    } else {
      this.userService.OtpVerification(this.otpCode, this.userEmail).subscribe({
        next: (res: any) => {
          if (res) {
            this.router.navigate(['/login', this.userEmail]);
          } else {
            this.router.navigate(['/signup']);
          }
        },
        error: (err: any) => {
          console.error('OTP Verification Failed', err);
        }
      });
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

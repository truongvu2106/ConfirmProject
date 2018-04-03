import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import 'rxjs/Rx';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  formUserId: FormGroup;
  formPasword: FormGroup;
  //User ID
  userId = new FormControl('', [
    Validators.required
  ]);

  //Password
  password = new FormControl('', [
    Validators.required
  ]);

  //Email User
  emailUser = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  //Email Password
  emailPw = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();
  
  isBox: number = 1;

  // forget user  
  submittedId = -1;

  // forgot pass 
  submittedPw =-1; 

  // reset box  
  submitted =false;
  isInfo=false;  
  confirmpassword=""; 
  
  constructor(fb: FormBuilder) {
    //form sign on
    this.form = fb.group({ 
      "userid": this.userId,
      "password": this.password,     
    }); 
    
    this.form.valueChanges
      .filter(data => this.form.valid)
        .subscribe( data => console.log(JSON.stringify(data)));
    
    //form forgot user
    this.formUserId = fb.group({ 
      "emailUser": this.emailUser
    }); 
    
    this.formUserId.valueChanges
      .filter(data => this.formUserId.valid)
        .subscribe( data => console.log(JSON.stringify(data))); 
    
    //form forgot password
    this.formPasword = fb.group({ 
      "emailPw": this.emailPw
    }); 
    
    this.formPasword.valueChanges
      .filter(data => this.formPasword.valid)
        .subscribe( data => console.log(JSON.stringify(data))); 
  }    
    
  ngOnInit() {    
  }

  //SignOn
  SignOn = (): void =>{
    if(this.form.valid){
      console.log('fsdfdgfd');
    }
  }

  // reset function
  Submit = (): void =>{
    this.form.valueChanges
        .subscribe( data => {
          console.log(JSON.stringify(data))
        });      
  }  

  // forgot user id

  SubmitId = (): void =>{
    this.submittedId =1;
  }

  // forgot pass
  SubmitPw = (): void =>{
    this.submittedPw =1;
  }
}

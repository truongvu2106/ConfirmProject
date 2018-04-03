import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
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
  selector: 'register-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mode = new FormControl('side');
  form: FormGroup;
  
  isAgree=false;
  submitted =false;  
  //User ID
  userId = new FormControl('', [
    Validators.required
  ]);
  //Password
  password = new FormControl('', [
    Validators.required
  ]);
  //Confirm password
  confirmpassword= new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  
  constructor(
    fb: FormBuilder
  ) {
    //form sign on
    this.form = fb.group({ 
      "userid": this.userId,
      "password": this.password,
      "confirmpassword": this.confirmpassword,    
    }); 
  }

  ngOnInit() {    
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }
  Submit = (): void =>{
    if(this.form.valid){
      console.log('fsdfdgfd');
    }
  }  
  CheckAgree(){
    if(this.isAgree)
      this.isAgree=false;
    else
      this.isAgree=true;
  }
}

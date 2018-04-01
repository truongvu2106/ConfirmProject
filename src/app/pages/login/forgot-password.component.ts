import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-forgot-user',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit { 
  isFocusUser:boolean;
  submitted =false;
  userid="";
  error="";
  constructor(
   
  ) {}

  ngOnInit() {    
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }  
  Submit = (): void =>{
    
    if (this.userid==""){
      this.submitted =false;
      this.error="Input is not null";
    }
    else if (this.userid=="Sample@sample.com"){
      this.submitted =false;
      this.error="'Sample@sample.com' is not a valid email address";
    }
    else{
      this.submitted =true;
    }
  }
}

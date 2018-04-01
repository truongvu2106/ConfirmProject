import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'register-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  isFocusUserId=false;
  isFocusPassword=false;
  isFocusConfirm=false;
  constructor(
   
  ) {}

  ngOnInit() {    
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }  
}

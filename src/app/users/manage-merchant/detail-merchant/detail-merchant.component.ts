import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
// @ngrx
import { Store } from "@ngrx/store";


import { Go } from "../../../actions/router";

// rxjs
import { Observable } from "rxjs/Observable";

// actions
import { SignUpAction } from "../../users.actions";

// reducers
import {
  State
} from "../../../reducers";

@Component({
  selector: 'app-detail-merchant',
  templateUrl: './detail-merchant.component.html',
  styleUrls: ['./detail-merchant.component.scss']
})
export class DetailMerchantComponent implements OnInit {
/**
   * The authentication form.
   * @type {FormControl}
   */
  public mode: FormControl;

  /**
   * isView
   * @type {boolean}
   */
  public isView=true;
  
  constructor() {    
  }

  ngOnInit() {
    this.mode = new FormControl('over');  
  }
  changeViewUpdateMerchant() {
    this.isView = !this.isView;  
  }
}

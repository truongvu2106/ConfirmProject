import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
// @ngrx
import { Store } from "@ngrx/store";


import { Go } from "../../actions/router";

// rxjs
import { Observable } from "rxjs/Observable";

// actions
import { SignUpAction } from "../users.actions";

// reducers
import {
  State
} from "../../reducers";

@Component({
  selector: 'app-manage-merchant',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss']
})
export class ManageMerchantComponent implements OnInit {
/**
   * The authentication form.
   * @type {FormControl}
   */
  public mode: FormControl;

  /**
   * isfocus
   * @type {boolean}
   */
  public isfocus: true;
  constructor() { }

  ngOnInit() {
    this.mode = new FormControl('over');
  }

}

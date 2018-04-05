import { Component, OnDestroy, OnInit } from "@angular/core";

import {FormControl, Validators} from '@angular/forms';

// @ngrx
import { Store } from "@ngrx/store";

// reducers
import {
  State
} from "../../reducers";


import { Go } from "../../actions/router";

/**
 * /users/forgot-pass
 * @class ForgotPassComponent */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

    /**
   * Component state.
   * @type {boolean}
   */
  public submitted = false;

  /**
   * @constructor
   */
  constructor(
    private store: Store<State>
  ) { }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  /**
   * Submit the authentication form.
   * @method submit
   */
  public submit() {
    // get email
    this.submitted = true

    setTimeout(() => {
      this.store.dispatch(new Go({
        path: ["/users/reset"]
      }));

    }, 3000);
  }
}




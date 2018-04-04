import { Component, OnDestroy, OnInit } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

// @ngrx
import { Store } from "@ngrx/store";


import { Go } from "../../actions/router";

// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/takeWhile";

// actions
import { AuthenticateAction } from "../users.actions";

// reducers
import {
  getAuthenticationError,
  isAuthenticated,
  isAuthenticationLoading,
  State
} from "../../reducers";

/**
 * /users/forgot-password
 * @class ForgotPasswordComponent */

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  /** The error if authentication fails.
   * @type {Observable<string>}
   */
  public error: Observable<string>;

  /**
   * True if the authentication is loading.
   * @type {boolean}
   */
  public loading: Observable<boolean>;

  /**
   * The authentication form.
   * @type {FormGroup}
   */
  public form: FormGroup;

  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;

    /**
   * Component state.
   * @type {boolean}
   */
  public isBox = 1;

  /**
   * @constructor
   * @param {FormBuilder} formBuilder
   * @param {Store<State>} store
   */
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method ngOnInit
   */
  public ngOnInit() {
    
    // set formGroup
    this.form = this.formBuilder.group({
      emailPw: ["", Validators.required]
    });

    // set error
    this.error = this.store.select(getAuthenticationError);

    // set loading
    this.loading = this.store.select(isAuthenticationLoading);

    // subscribe to success    
    this.store.select(isAuthenticated)
      .takeWhile(() => this.alive)
      .filter(authenticated => authenticated)
      .subscribe(value => {
        this.store.dispatch(new Go({
          path: ["/users/my-account"]
        }));

      });
  }

  /**
   *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * @method ngOnDestroy
   */
  public ngOnDestroy() {
    this.alive = false;
  }

  /**
   * Go to the home page.
   * @method home
   */
  public home() {
    this.store.dispatch(new Go({
      path: ["/"]
    }));
  }

  /**
   * To to the sign up page.
   * @method signUp
   */
  public signUp() {
    this.store.dispatch(new Go({
      path: ["/users/sign-up"]
    }));
  }

  /**
   * Submit the authentication form.
   * @method submit
   */
  public submit() {
    // get email
    const emailPw: string = this.form.get("emailPw").value;    

    // trim values
    emailPw.trim();
  }
}

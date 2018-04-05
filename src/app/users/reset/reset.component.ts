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
 * /users/reset
 * @class ResetComponent */

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  /**
   * The error if authentication fails.
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
  public submitted = false;

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
      passwordnew: ["", Validators.required],
      passwordconfirm: ["", Validators.required],
    });
    this.form.valueChanges
    .filter(data => this.form.valid)
      .subscribe( data => console.log(JSON.stringify(data)));
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
   * Submit the reset pass form.
   * @method submit
   */
  public submit() {
    
    this.store.dispatch(new Go({
      path: ["/users/sign-in"]
    }));
  }

}

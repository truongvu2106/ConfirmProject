import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// @ngrx
import { Store } from "@ngrx/store";

import { DataService } from '../../core/services/data.service';


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
 * /users/sign-in
 * @class SignInComponent */

@Component({
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})

export class SignInComponent implements OnDestroy, OnInit {



  jsonTitle: string;
  jsonUserName: string;
  jsonPassword: string;
  jsonRemember: string;
  jsonSubmit: string;

  errorMessage: string;

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
  public isBox = 1;

  /**
   * @constructor
   * @param {FormBuilder} formBuilder
   * @param {Store<State>} store
   */
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method ngOnInit
   */
  public ngOnInit() {

    this.onload();
    
    // set formGroup
    this.form = this.formBuilder.group({
      userId: ["", Validators.required],
      password: ["", Validators.required]
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

  onload = (): void => {
    this.dataService.getData('assets/data/sign-in.json').subscribe(
      data => {
        this.jsonTitle = data.signin.elements.pageTitle.title;
        this.jsonUserName = data.signin.elements.username.hint;
        this.jsonPassword = data.signin.elements.password.hint;
        this.jsonRemember = data.signin.elements.remember.on;
        this.jsonSubmit = data.signin.elements.submit.title;
      },
      error => this.errorMessage = <any>error
    );
  }

  /**
   *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
   * @method ngOnDestroy
   */
  public ngOnDestroy() {
    this.alive = false;
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
    // get email and password values
    const userId: string = this.form.get("userId").value;
    const password: string = this.form.get("password").value;

    // trim values
    userId.trim();
    password.trim();

    // set payload
    const payload = {
      userId: userId,
      password: password
    };

    // dispatch AuthenticationAction and pass in payload
    this.store.dispatch(new AuthenticateAction(payload));
  }
}

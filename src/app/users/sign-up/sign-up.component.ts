import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// @ngrx
import { Store } from "@ngrx/store";


import { Go } from "../../actions/router";


import { DataService } from '../../core/services/data.service';

// rxjs
import { Observable } from "rxjs/Observable";

// actions
import { SignUpAction } from "../users.actions";

// reducers
import {
  getSignUpError,
  isAuthenticated,
  isAuthenticationLoading,
  State
} from "../../reducers";

// models
import { User } from "../../core/models/user";


/**
 * /users/sign-up
 * @class SignUpComponent
 */
@Component({
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnDestroy, OnInit {
  
  
  jsonWelcome: string;
  jsonTitle: string;
  jsonUserName: string;
  jsonPassword: string;
  jsonPasswordConfirm: string;
  jsonRemember: string;
  jsonRememberText: string;
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
  public signupForm: FormGroup;

  /**
   * Component state.
   * @type {boolean}
   */
  private alive = true;

  /**
   * @constructor
   * @param {FormBuilder} formBuilder
   * @param {Store<State>} store
   */
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method ngOnInit
   */
  public ngOnInit() {

    this.onload();

    // set FormGroup
    this.signupForm = this.formBuilder.group({
      userId: ["", Validators.required],
      password: ["", Validators.required],
      passwordconfirm: ["", Validators.required]
    });

    // set error
    this.error = this.store.select(getSignUpError);

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
    this.dataService.getData('assets/data/sign-up.json').subscribe(
      data => {
        this.jsonWelcome = data.signup.welcome;
        this.jsonTitle = data.signup.elements.pageTitle.title;
        this.jsonUserName = data.signup.elements.username.hint;
        this.jsonPassword = data.signup.elements.password.hint;
        this.jsonPasswordConfirm = data.signup.elements.passwordconfirm.hint;
        this.jsonRemember = data.signup.elements.remember.on;
        this.jsonRememberText = data.signup.elements.remember.text;
        this.jsonSubmit = data.signup.elements.submit.title;
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
   * Submit the sign up form.
   * @method submit
   */
  public submit() {

    // create a new User object
    const user: User = new User();
    user.userId = this.signupForm.get("userId").value;
    user.password = this.signupForm.get("password").value;
    user.passwordconfirm = this.signupForm.get("passwordconfirm").value;

    // trim values
    user.userId.trim();
    user.password.trim();
    user.passwordconfirm.trim();

    // set payload
    const payload = {
      user: user
    };

    // dispatch SignUpAction and pass in payload
    this.store.dispatch(new SignUpAction(payload));
  }
}
